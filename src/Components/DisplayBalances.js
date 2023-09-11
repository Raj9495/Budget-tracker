import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = (props) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title="Income:"
              value={`$ ${props.totalIncome}`}
              color="green"
              size="tiny"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="Expenses"
              value={`$ ${props.totalExpense}`}
              color="red"
              size="tiny"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
