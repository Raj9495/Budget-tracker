import { Container, Grid, Icon, Segment, Statistic } from "semantic-ui-react";
import "./App.css";

import MainHeader from "./Components/MainHeader";

import NewEntryForm from "./Components/NewEntryForm";
import DisplayBalance from "./Components/DisplayBalance";

export default function App() {
  return (
    <Container>
      <MainHeader title={"Budget Tracker"} />
      <Statistic size="small">
        <DisplayBalance title="Your Balance:" value="25000" size="small" />
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income:" value="1045" color="green" size="tiny"/>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title="Expeses" value="500" color="red"  size="tiny"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title={"History"} type="h3" />
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
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
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
      <MainHeader title="Add new Transactions" type="h3" />
      <NewEntryForm />
    </Container>
  );
}
