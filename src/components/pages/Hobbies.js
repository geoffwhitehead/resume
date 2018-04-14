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
            here and there. Part way through building an underwater ROV
            controlled with an Arduino.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3"> Mountain Biking </List.Header>
          <List.Description as="p">
            Took part in the Beamish Behemoth in 2017. Planning a 3 day tour
            (~230km) tour around the Cairngorms in May 2018. Last year went
            mountain biking in Doi Suthep (Doi Pui), Thailand.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Mountaineering / Navigation </List.Header>
          <List.Description as="p">
            I've been mountaineering / winter mountaineering since a young age.
            Last year climbed Ben Nevis in winter and have hiked Scarfell in the
            past. During the "beast from the east" i was climbing in the
            Arrochar Alps, Scotland.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="circle outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">Kayak / Canoe</List.Header>
          <List.Description as="p">
            2 star kayak / canoe and level 1 kayak / canoe coach. Last trip was
            Kayaking in Bai Tu Long Bay, Vietnam.
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
          <List.Header as="h3"> SE Asia </List.Header>
          <List.Description as="p">
            Over the past 5 years i've Travelled a lot of SE Asia including
            Thailand, Cambodia, Vietnam, Laos, Philipines, Burma, Singapore,
            Vietnam.
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
