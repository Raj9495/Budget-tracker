import React from "react";
import ButtonSaveorCancel from "./ButtonSaveorCancel";
import { Form } from "semantic-ui-react";
const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="new shiny thing"
        ></Form.Input>
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
        ></Form.Input>
      </Form.Group>
      <ButtonSaveorCancel />
    </Form>
  );
};

export default NewEntryForm;
