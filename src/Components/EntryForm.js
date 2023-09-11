import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

const EntryForm = (props) => {
  // console.log("EntryForm Props==", props);
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="new shiny thing"
          value={props.description}
          onChange={(e) => props.SetDescription(e.target.value)}
        ></Form.Input>
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={props.value}
          onChange={(e) => props.SetValue(e.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is Expense"
          checked={props.isExpense}
          onChange={() => props.SetIsExpense((isChecked) => !isChecked)}
        ></Checkbox>
      </Segment>
    </>
  );
};

export default EntryForm;
