import React from "react";
import { Button } from "semantic-ui-react";
const ButtonSaveorCancel = (props) => {
  console.log("Props=====", props);
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button
        primary
        onClick={() => {
          props.AddEntries();
        }}
      >
        Ok
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveorCancel;
