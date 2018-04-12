import React from "react";
import PropTypes from "prop-types";
// import { ReactAccordionIcon } from "./AccordionIcon";

import "./index";

const ClosedSection = ({
  section,
  current,
  total,
  goToSection,
  includeStepNumbers
}) => (
  <div className={`section-closed`}>
    {includeStepNumbers && (
      <div className="accordion-left">
        <hr width="1" size="500" className={current === 0 ? "hide" : ""} />
        <div className="circle-closed">
          {/* {section.valid && <i className="fa fa-check" />}
          {!section.valid && <i className="fa fa-times" />} */}
        </div>
        <hr
          width="1"
          size="500"
          className={current === total - 1 ? "hide" : ""}
        />
      </div>
    )}

    <div className="accordion-right">
      <div
        className={"accordion-hover"}
        onClick={() => goToSection(current)}
      >
        {/* <ReactAccordionIcon valid={section.valid} /> */}
        <div>{section.closed}</div>
        {/* {section.valid && (
          <a
            className={"accordion-hover"}
            onClick={() => goToSection(current)}
          >
            edit
          </a>
        )} */}
      </div>
    </div>
  </div>
);

ClosedSection.propTypes = {
  section: PropTypes.object.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goToSection: PropTypes.func.isRequired,
  includeStepNumbers: PropTypes.bool
};
export default ClosedSection;
