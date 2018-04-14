import React from "react";
import { List, Icon } from "semantic-ui-react";

export const OpenSource = () => {
  return (
    <List divided relaxed>
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://www.npmjs.com/package/react-alerts-lite"}
          >
            reactiness/react-alerts-lite
          </List.Header>
          <List.Description as="p">
            A minimal library for rendering alert / toasts / popups /
            notifications in react apps.
          </List.Description>
          <List.Description as="p">
            <Icon name="github" />
            <a href={"https://github.com/reactiness/react-alerts-lite"}>
              github.com/reactiness/react-alerts-lite
            </a>
          </List.Description>
          <List.Description as="p">
            <Icon name="code" />
            <a href={"https://www.npmjs.com/package/react-alerts-lite"}>
              npmjs.com/package/react-alerts-lite
            </a>
          </List.Description>
          <List.List className="gold">
            <List.Item>Tech: React, react-transition-group</List.Item>
            <List.Item>Tooling: Webpack 4</List.Item>
            <List.Item>Testing Framework: Jest / Enzyme </List.Item>
            <List.Item>CI/CD: CircleCI </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  );
};
