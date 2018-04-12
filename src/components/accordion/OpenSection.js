import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { Element } from "react-scroll";
// import { ReactAccordionIcon } from "./AccordionIcon";

import "./index";

let timer;

class OpenSection extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    clearTimeout(timer);
  }

  render() {
    const {
      section,
      current,
      total,
      onNextSection,
      includeStepNumbers,
      openPath
    } = this.props;

    return (
      <div className="section-open show">
        <Element name="openSectionScrollElement" />
        {includeStepNumbers && (
          <div className="accordion-left">
            {}
            <hr width="1" size="500" className={current == 0 ? "hide" : ""} />
            <div className="circle-open">
              {" "}
              <strong>{current + 1}</strong> of {total}
            </div>
            <hr
              width="1"
              size="500"
              className={current == total - 1 ? "hide" : ""}
            />
          </div>
        )}
        <div className="accordion-right">
          {/* <ReactAccordionIcon open /> */}
          {section.open}
          {current + 1 !== total && (
            <Button
              // disabled={!section.valid}
              onClick={onNextSection}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    );
  }
}

OpenSection.propTypes = {
  section: PropTypes.object.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onNextSection: PropTypes.func,
  includeStepNumbers: PropTypes.bool
};
export default OpenSection;
