import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

const EntryLine = () => {
  return (
    <Segment color="red">
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            Something
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            1000
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default EntryLine;
