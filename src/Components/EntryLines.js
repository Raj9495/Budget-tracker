import React from "react";
import EntryLine from "./EntryLine";
import { Container } from "semantic-ui-react";

const EntryLines = (props) => {
  // console.log("EntryLines Props----", props);

  return (
    <Container>
      {props.Entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          deleteEntries={props.deleteEntries}
          editEntry={props.editEntry}
        />
      ))}
    </Container>
  );
};

export default EntryLines;
