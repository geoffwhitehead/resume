import React from "react";
import { List, Icon } from "semantic-ui-react";

export const Projects = () => {
  return (
    <List divided relaxed>
      <List.Item>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://github.com/geoffwhitehead/uROV-control-system"}
          >
            Underwater ROV control system
          </List.Header>
          <List.Description as="p">
            Control system for an electronics project to create an underwater
            ROV. Used an Arduino Mega to control 3 seperate bilge pumps
            converted into motors for vertical and horizontal propulsion, an
            onboard 2 axis camera, temperature sensor, magnometer,
            accelerometer, gyrometer, depth guage, and lights. It also
            communicated with a surface module providing power, joystick
            control, and visuals.
          </List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://github.com/geoffwhitehead/game-engine"}
          >
            Hardware accelerated 3D game engine
          </List.Header>
          <List.Description as="p">
            A lightweight game engine i created in OpenGL. It uses the NCLGL
            framework, JsonCPP, Klang Audio, and Box2d for physics.
          </List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://github.com/geoffwhitehead/metagenomics-project"}
          >
            metagenomics-tool
          </List.Header>
          <List.Description as="p">
            Tool i created to allow single gene analysis from any gene in the
            dataset obtained from "A human gut microbial gene catalogue
            established by metagenomic sequencing" by Junjie Qin1, Ruiqiang Li1,
            Jeroen Raes et al.
          </List.Description>
          <List.Description as="p">
            <Icon name="graduation" />
            Dissertation
          </List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://github.com/geoffwhitehead/game-engine"}
          >
            Collision Detection
          </List.Header>
          <List.Description as="p">
            This was created as an alternative to the problems encountered using
            dynamic casting for collision detection with shape types. The
            visitor design pattern is one of the behavioural design patterns
            from the Gang of Four{" "}
            <a href={"http://www.blackwasp.co.uk/Visitor.aspx"} />).
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};
