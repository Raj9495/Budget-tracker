import { Grid, Icon, Segment } from "semantic-ui-react";

const EntryLine = ({
  id,
  description,
  value,
  isExpense = false,
  deleteEntries,
  editEntry,
}) => {
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {`$ ${value}`}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => editEntry(id)} />
              <Icon
                name="trash"
                onClick={() => {
                  deleteEntries(id);
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
