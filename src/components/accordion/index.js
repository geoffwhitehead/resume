import React from "react";
import PropTypes from "prop-types";
import ClosedSection from "./ClosedSection";
import OpenSection from "./OpenSection";
import { WithScrolling } from "./WithScrolling";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { CSSTransition } from "react-transition-group";
import "transitions/accordion.scss";
import "./index.scss";

export class Accordion extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.handleNextSection = this.handleNextSection.bind(this);
    this.handleGoToSection = this.handleGoToSection.bind(this);
  }

  handleNextSection() {
    const { onGoToSection, currentSection } = this.props;
    onGoToSection(currentSection + 1);
  }

  handleGoToSection(sectionIndex) {
    this.props.onGoToSection(sectionIndex);
  }

  renderedSections() {
    const { sections, currentSection, includeStepNumbers } = this.props;

    return sections.map((section, i) => {
      let sec;
      const state = currentSection === i ? "open" : "closed";
      if (state === "open") {
        sec = (
          <WithScrolling
            key={`open-${section.id}`}
            scrollElementName="openSectionScrollElement"
            scrollOnMount={true}
            delay={300}
            offset={-200}
          >
            {() => (
              <OpenSection
                section={section}
                current={i}
                total={sections.length}
                onNextSection={this.handleNextSection}
                includeStepNumbers={includeStepNumbers}
              />
            )}
          </WithScrolling>
        );
      } else {
        sec = (
          <ClosedSection
            key={`closed-${section.id}`}
            section={section}
            current={i}
            total={sections.length}
            goToSection={this.handleGoToSection}
            includeStepNumbers={includeStepNumbers}
          />
        );
      }
      return (
        <TransitionGroup className="accordion">
          <CSSTransition
            classNames="accordion"
            timeout={1000}
            key={`section-${section.id}-${state}`}
          >
            {sec}
          </CSSTransition>
        </TransitionGroup>
      );
    });
  }

  render() {
    const renderedSections = this.renderedSections();
    return <div className="cp-react-accordion">{renderedSections}</div>;
  }
}

Accordion.propTypes = {
  sections: PropTypes.array.isRequired,
  onGoToSection: PropTypes.func.isRequired,
  currentSection: PropTypes.number.isRequired,
  includeStepNumbers: PropTypes.bool
};
