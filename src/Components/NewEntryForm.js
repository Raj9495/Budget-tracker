import ButtonSaveorCancel from "./ButtonSaveorCancel";
import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";
const NewEntryForm = (props) => {
  // console.log("newEntryForm props===", props);
  return (
    <Form unstackable>
      <EntryForm
        description={props.description}
        value={props.value}
        isExpense={props.isExpense}
        SetDescription={props.SetDescription}
        SetValue={props.SetValue}
        SetIsExpense={props.SetIsExpense}
      />
      <ButtonSaveorCancel AddEntries={props.AddEntries} />
    </Form>
  );
};

export default NewEntryForm;
