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
            href={"https://github.com/geoffwhitehead/solidity-react-kickstart"}
          >
            solidity-react-kickstart
          </List.Header>
          <List.Description as="p">
            Etherium solidity blockchain project with React built with Next.js.
            Emulates kickstarter using contracts.
          </List.Description>
          <List.List className="gold">
            <List.Item>
              Tech: JavaScript, Solidity, React, Next.js, Web3
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://github.com/geoffwhitehead/solidity-react-lottery"}
          >
            solidity-react-lottery
          </List.Header>
          <List.Description as="p">
            Solidity lottery contract with react front-end. Allows users to
            enter and win a lottery.
          </List.Description>
          <List.List className="gold">
            <List.Item>Tech: JavaScript, Solidity, React, Web3</List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://github.com/geoffwhitehead/solidity-lottery"}
          >
            solidity-lottery
          </List.Header>
          <List.Description as="p">
            A solidity Lottery contract that allows users to enter a lottery and
            the creator to pick a winner and restart contract
          </List.Description>
          <List.List className="gold">
            <List.Item>Tech: Solidity, Ganache, Web3</List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            href={"https://github.com/geoffwhitehead/solidity-lottery"}
          >
            solidity-lottery
          </List.Header>
          <List.Description as="p">
            A solidity Lottery contract that allows users to enter a lottery and
            the creator to pick a winner and restart contract
          </List.Description>
          <List.List className="gold">
            <List.Item>Tech: Solidity, Ganache, Web3</List.Item>
          </List.List>
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
          <List.List className="gold">
            <List.Item>Tech: C++, OpenGL, Box2D</List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  );
};
