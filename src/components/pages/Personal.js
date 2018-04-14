import React from "react";
import { Grid, Image, List, Icon } from "semantic-ui-react";
import Avatar from "assets/avatar.jpeg";
import Lottie from "react-lottie";
import * as animationData from "assets/lottie/react.json";
import "./Personal.scss";

export class Personal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <Grid columns={2} centered className="page-personal">
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: "-webkit-right" }}>
            <Image src={Avatar} size="medium" rounded />
          </Grid.Column>
          <Grid.Column width={8} verticalAlign="middle">
            <List>
              <List.Item>
                <List.Icon name="user" />
                <List.Content>Geoff Whitehead</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>Newcastle-upon-Tyne, UK</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:geoff1012@gmail.com">geoff1012@gmail.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a href="https://github.com/geoffwhitehead">Github</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkedin" />
                <List.Content>
                  <a href="https://www.linkedin.com/in/geoffwhitehead/">
                    LinkedIn
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <h3 className="synopsis">
            Experienced software developer focused in Node, JavaScript(ES6/ES7),
            React, Redux, Sagas, Jest, Enzyme, CI / CD.
          </h3>
        </Grid.Row>
        <Grid.Row style={{ opacity: 0.3 }}>
          <Lottie options={defaultOptions} height={100} width={100} />
        </Grid.Row>
      </Grid>
    );
  }
}
