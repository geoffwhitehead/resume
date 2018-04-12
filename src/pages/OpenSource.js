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
          <Icon name="github" />
          <a href={"https://github.com/reactiness/react-alerts-lite"}>
            github.com/reactiness/react-alerts-lite
          </a>
        </List.Content>
      </List.Item>
    </List>
  );
};
