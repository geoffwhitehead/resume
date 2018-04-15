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
      show: true,
      changingSection: false
    };
    this.handleNextSection = this.handleNextSection.bind(this);
    this.handleGoToSection = this.handleGoToSection.bind(this);
    this.handleChangingSection = this.handleChangingSection.bind(this);
    this.transitionDuration = 1000;
  }

  handleNextSection() {
    const { onGoToSection, currentSection } = this.props;
    onGoToSection(currentSection + 1);
    this.handleChangingSection();
  }

  handleChangingSection() {
    this.setState({
      changingSection: true
    });
    setTimeout(() => {
      this.setState({ changingSection: false });
    }, this.transitionDuration);
  }

  handleGoToSection(sectionIndex) {
    this.props.onGoToSection(sectionIndex);
    this.handleChangingSection();
  }

  renderedSections() {
    const { sections, currentSection, includeStepNumbers } = this.props;

    return sections.map((section, i) => {
      let sec;
      const state = currentSection === i ? "open" : "closed";
      if (state === "open") {
        sec = (
          <WithScrolling
            scrollElementName="openSectionScrollElement"
            scrollOnMount={true}
            delay={400}
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
            changingSection={this.state.changingSection}
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
            timeout={this.transitionDuration}
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
    return <div className="accordion-wrapper">{renderedSections}</div>;
  }
}

Accordion.propTypes = {
  sections: PropTypes.array.isRequired,
  onGoToSection: PropTypes.func.isRequired,
  currentSection: PropTypes.number.isRequired,
  includeStepNumbers: PropTypes.bool
};
