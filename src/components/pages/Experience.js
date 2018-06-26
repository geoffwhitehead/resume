import React from "react";
import { List, Icon } from "semantic-ui-react";

export const Experience = () => {
  return (
    <List divided relaxed>
      <List.Item>
        <List.Icon name="industry" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3"> AirFair - Front End Developer</List.Header>
          <List.Description as="p">2017 August - Present</List.Description>
          <List.Description as="p">Newcastle upon Tyne</List.Description>
          <List.Description as="p">
            <ul>
              <li>
                Developed a dashboard onboarding system for managing flight
                delay claim submissions. Led tech decisions related to the front
                end from creation to release in April 2018.
              </li>
              <li>Led the implementation of a CD build process for CoPilot</li>
              <li>
                Led the implementation of testing framework of CoPilot using
                Enzyme / Jest
              </li>
              <li>
                Introduced the company to Redux Sagas which has replaced thunks
                and is now used extensively in multiple projects
              </li>
              <li>
                Most recently tasked with recreating the entire front-end client
                onboarding portal in React and integrating with a new API,
                whilst also adding language support for multiple locales.
              </li>
            </ul>
          </List.Description>
          <List.List className="gold">
            <List.Item>
              Tech: JavaScript (ES6/ES7), Next.js, React, Redux, Sagas, CSS
              Modules, SCSS
            </List.Item>
            <List.Item>Tooling: Webpack 3 / 4, Git</List.Item>
            <List.Item>Testing: Jest / Enzyme </List.Item>
            <List.Item>CI/CD: CircleCI </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="industry" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3"> Sage One - Back End Developer</List.Header>
          <List.Description as="p">2017 January - March</List.Description>
          <List.Description as="p">Newcastle upon Tyne</List.Description>
          <List.Description as="p">
            Extensive testing and debugging of the Sage One accounting platform
          </List.Description>
          <List.List className="gold">
            <List.Item>Tech: Ruby, Rails</List.Item>
            <List.Item>Tooling: Git, Jira </List.Item>
            <List.Item>Testing Framework: Rspec </List.Item>
            <List.Item>CI/CD: Codeship </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="industry" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">
            {" "}
            Nadon Thai Restaurants - Operations Manager
          </List.Header>
          <List.Description as="p">2010 November - Present</List.Description>
          <List.Description as="p">
            Newcastle upon Tyne, Durham, Morpeth
          </List.Description>
          <List.Description as="p">
            Still working on a part time basis as and when required. Worked with
            owners to build 3 successful restaurants. From opening the first
            restaurant in Morpeth in 2010 to the 3rd restaurant in Newcastle in
            2016. Involved in managing restaurants, marketing, design (Abobe
            photoshop - created all material including menus), all photography,
            systems and procedures, stock control and suppliers, renovations,
            restaurant theme and design, CCTV install in all 3 restaurants,
            represented Durham for licencing and planning, and general advice
            and guidance.
          </List.Description>
          <List.List className="gold">
            <List.Item>
              Skills: Time management, business acumen, general management,
              resourcefulness
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  );
};
