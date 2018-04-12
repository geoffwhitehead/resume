import React from "react";
import { List, Icon } from "semantic-ui-react";

export const Education = () => {
  return (
    <List divided relaxed>
      <List.Item>
        <List.Icon name="graduation" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">
            2016 Newcastle University - Computer Science - 1st
          </List.Header>
          <List.Description as="p">
            Programming 1, programming 2, computer architecture, maths for
            computer science, web design, software engineering, software
            engineering professional, software engineering team project,
            algorithm design, database tech, operating systems, computer
            networks, distributed systems, web tech, C++ programming,
            simulations (C++), graphics (C++), web construction and management,
            ubiquitous computing, dissertation in data science
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="student" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">
            2013 Newcastle College - Engineering - Triple Distinction*
          </List.Header>
          <List.Description as="p">
            Maths for engineering, mechanical principles and applications,
            properties and applications of engineering materials, applications
            of computer numerical control, principles and applicatons of
            electronic devices and circuits, communicatons for engineering tech,
            electrical and electronic principles, engineering design, further
            mech principles and applications, electro and pneumatic and
            hydraulic systems and devices, engineering drawing for tech,
            computer aided drafting in engineering, selecting and using
            programmable controllers, further maths for technicians, electrical
            technology
          </List.Description>
          <Icon name="trophy" color="yellow" />Student of the year award
        </List.Content>
      </List.Item>
    </List>
  );
};
