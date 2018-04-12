import React from "react";
import { Grid, Image, List, Icon } from "semantic-ui-react";
import Avatar from "assets/avatar.jpeg";

export const Personal = () => {
  return (
    <Grid columns={2} centered>
    <Grid.Row>
      <Grid.Column width={6}>
        <Image src={Avatar} size="medium" rounded />
      </Grid.Column>
      <Grid.Column width={4} verticalAlign="middle"> 
        <List>
          <List.Item>
            <List.Icon name='user' />
            <List.Content>Geoff Whitehead</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>Newcastle-upon-Tyne, UK</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <a href='mailto:geoff1012@gmail.com'>geoff1012@gmail.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' />
            <List.Content>
              <a href='https://github.com/geoffwhitehead'>Github</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkedin' />
            <List.Content>
              <a href='https://www.linkedin.com/in/geoffwhitehead/'>LinkedIn</a>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <h3>
          Experienced software developer focused in React, Redux, Sagas, Jest, Enzyme, CI, and CD.
        </h3>
      </Grid.Row>
    </Grid>
  )
  
};
