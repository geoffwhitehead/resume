import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import * as animationData from "assets/lottie/round.json";

import "./index";


export default class ClosedSection extends React.Component {
  render() {
    const {
      section,
      current,
      total,
      goToSection,
      includeStepNumbers
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
            <div className="circle-closed" id="lottie">
              <Lottie options={defaultOptions} height={60} width={60} />
            </div>
            <hr
              width="1"
              size="500"
              className={current === total - 1 ? "hide" : ""}
            />
          </div>
        )}

        <div className="accordion-right" onClick={() => goToSection(current)}>
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
