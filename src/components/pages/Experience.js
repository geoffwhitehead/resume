import React from "react";
import { List, Icon } from "semantic-ui-react";

export const Experience = () => {
  return (
    <List divided relaxed>
      <List.Item>
        <List.Icon name="industry" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Software Developer, AirFair</List.Header>
          <List.Description as="p">
            Aug/2017 - present, Newcastle upon Tyne
          </List.Description>
          <List.Description>
            <ul>
              <li>
                Introduced modern react design patterns such as Compound
                Components and Render Props.
              </li>
              <li>Implemented full support for internationalization.</li>
              <li>Made technical decisions on application technologies.</li>
              <li>
                Introduced Redux Sagas to overcome limitations of Thunks,
                improve code readability and reduce complexity.
              </li>
              <li>Implemented CI and Git branching strategy.</li>
              <li>Thorough unit and component testing with Jest & Enzyme.</li>
              <li>
                Implemented complete overhaul as well as implementing SSR, CSS
                Modules, CI.
              </li>
            </ul>
          </List.Description>
          <List.List className="gold">
            <List.Item>
              Tech: JavaScript (ES6/ES7), Next.js, React, Redux, Sagas, SASS,
              Webpack, Jest, Enzyme, CircleCI
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="industry" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3"> Software Developer, Sage One</List.Header>
          <List.Description as="p">
            Jan/2017 - Mar/2017, Newcastle-upon-Tyne
          </List.Description>
          <List.Description as="p">
            Extensive testing and debugging of the Sage One accounting platform
          </List.Description>
          <List.List className="gold">
            <List.Item>Tech: Ruby, Rails, Jira, Rspec, Codeship</List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="industry" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">
            Operations Manager, Nadon Thai Restaurants
          </List.Header>
          <List.Description as="p">
            Nov/2010 - Jan/2017, Newcastle upon Tyne, Durham, Morpeth
          </List.Description>
          <List.Description as="p">
            <li>
              Oversaw general operation and staff management of 3 restaurants.
            </li>
            <li>Designed and photographed for their current evening menu.</li>
            <li>First contact for all staff / customer / equipment issues.</li>
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};
