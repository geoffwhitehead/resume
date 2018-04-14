import React from "react";
import { List, Icon } from "semantic-ui-react";

export const Hobbies = () => {
  return (
    <List divided relaxed>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Electronics / Arduino</List.Header>
          <List.Description as="p">
            I'm fairly comfortable with electronics and aswell as repairing
            catering equipment for restaurants enjoy playing around with Arduino
            here and there.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Kayak / Canoe</List.Header>
          <List.Description as="p">
            2 star kayak / canoe and level 1 kayak / canoe coach
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Mountaineering / Navigation </List.Header>
          <List.Description as="p">
            I've been mountaineering / winter mountaineering since a young age.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Sailing</List.Header>
          <List.Description as="p">
            Level 1 in Sailing - Topper / Laser
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Climbing</List.Header>
          <List.Description as="p">
            Competent climber - although a little out of practice ;)
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};
