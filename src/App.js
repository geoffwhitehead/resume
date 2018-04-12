import React, { Component } from "react";
import { NavbarDisplay } from "components/navbar";
import { Accordion } from "components/accordion";
import { Container } from "semantic-ui-react";
import { Education, Experience, Projects, OpenSource } from "pages";

import "semantic-ui-css/semantic.min.css";
import "./App.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0
    };
    this.handleOnGoToSection = this.handleOnGoToSection.bind(this);
  }
  handleOnGoToSection(index) {
    this.setState({
      currentSection: index
    });
  }
  render() {
    const accordionSections = [
      {
        id: 1,
        closed: "Experience",
        open: <Experience />
      },
      {
        id: 2,
        closed: "Education",
        open: <Education />
      },
      {
        id: 3,
        closed: "Open Source",
        open: <OpenSource />
      },
      {
        id: 4,
        closed: "Projects",
        open: <Projects />
      }
    ];
    return (
      <div>
        <NavbarDisplay />
        <Container>
          <div className="app">
            <Accordion
              sections={accordionSections}
              currentSection={this.state.currentSection}
              onGoToSection={this.handleOnGoToSection}
              includeStepNumbers
            />
          </div>
        </Container>
      </div>
    );
  }
}
