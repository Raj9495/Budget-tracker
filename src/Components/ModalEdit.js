import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = (props) => {
  // console.log("Props from ModalEdit", props);
  return (
    <Modal open={props.isOpen}>
      <Modal.Header>Edit Entries</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <EntryForm
            description={props.description}
            value={props.value}
            isExpense={props.isExpense}
            SetDescription={props.SetDescription}
            SetValue={props.SetValue}
            SetIsExpense={props.SetIsExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => props.setIsOpen(false)}>
          Save
        </Button>
        <Button color="red" onClick={() => props.setIsOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
