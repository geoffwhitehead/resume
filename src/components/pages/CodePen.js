import React from "react";
import { Grid } from "semantic-ui-react";

export class CodePen extends React.Component {
  render() {
    return (
      <Grid columns={2} centered className="page-codepen">
        <Grid.Row>
          <p className="codepen">
            Collection of codepen projects hosted
            <a href="https://codepen.io/geoffwhitehead/"> Here</a>
          </p>
        </Grid.Row>
      </Grid>
    );
  }
}
