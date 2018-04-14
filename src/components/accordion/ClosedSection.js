import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import * as animationData from "assets/lottie/round.json";

import "./index";

export default class ClosedSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoToSection = this.handleGoToSection.bind(this);
  }

  handleGoToSection() {
    const { goToSection, current } = this.props;
    goToSection(current);
  }

  render() {
    const {
      section,
      current,
      total,
      goToSection,
      includeStepNumbers,
      changingSection
    } = this.props;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className={`section-closed`}>
        {includeStepNumbers && (
          <div className="accordion-left">
            <hr width="1" size="500" className={current === 0 ? "hide" : ""} />
            <div className="circle-closed" onClick={this.handleGoToSection}>
              <Lottie
                options={defaultOptions}
                height={60}
                width={60}
                isStopped={changingSection}
                className="asdasdsad"
              />
            </div>
            <hr
              width="1"
              size="500"
              className={current === total - 1 ? "hide" : ""}
            />
          </div>
        )}

        <div className="accordion-right" onClick={this.handleGoToSection}>
          {section.closed}
        </div>
      </div>
    );
  }
}

ClosedSection.propTypes = {
  section: PropTypes.object.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goToSection: PropTypes.func.isRequired,
  includeStepNumbers: PropTypes.bool
};
