import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayBalance from "./Components/DisplayBalance";
import DisplayBalances from "./Components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./Components/EntryLines";
import ModalEdit from "./Components/ModalEdit";
export default function App() {
  const [Entries, SetEntries] = useState(initialValue);
  const [description, SetDescription] = useState("");
  const [value, SetValue] = useState("");
  const [isExpense, SetIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setentryId] = useState();
  const [totalIncome, settotalIncome] = useState(0);
  const [totalExpense, settotalExpense] = useState(0);
  const [total, settotal] = useState(0);
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = Entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...Entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      SetEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    let total = 0;
    Entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += parseInt(entry.value));
      }
      return (totalIncome += parseInt(entry.value));
    });

    settotalIncome(totalIncome);
    settotalExpense(totalExpense);
    total = totalIncome - totalExpense;
    settotal(total);
  }, [Entries]);
  function deleteEntries(id) {
    const result = Entries.filter((entry) => entry.id !== id);
    SetEntries(result);
  }
  function editEntry(id) {
    console.log(`Edit entry with ${id}`);
    if (id) {
      const index = Entries.findIndex((entry) => entry.id === id);
      const entry = Entries[index];
      setentryId(id);
      SetDescription(entry.description);
      SetValue(entry.value);
      SetIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function AddEntries() {
    const result = [
      ...Entries,
      { id: Entries.length + 1, description, value, isExpense },
    ];
    console.log("Result", result);
    console.log("Entries", Entries);

    SetEntries(result);
    resetEntry();
  }
  function resetEntry() {
    SetDescription("");
    SetValue("");
    SetIsExpense(true);
  }
  return (
    <Container>
      <MainHeader title={"Budget Tracker"} />

      <DisplayBalance
        title="Your Balance:"
        value={`$ ${total}`}
        size="tiny"
        color={total > 0 ? "green" : "red"}
      />

      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <MainHeader title={"History"} type="h3" />
      <EntryLines
        Entries={Entries}
        deleteEntries={deleteEntries}
        editEntry={editEntry}
      />

      <MainHeader title="Add new Transactions" type="h3" />
      <NewEntryForm
        AddEntries={AddEntries}
        description={description}
        value={value}
        isExpense={isExpense}
        SetDescription={SetDescription}
        SetValue={SetValue}
        SetIsExpense={SetIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        AddEntries={AddEntries}
        description={description}
        value={value}
        isExpense={isExpense}
        SetDescription={SetDescription}
        SetValue={SetValue}
        SetIsExpense={SetIsExpense}
      />
    </Container>
  );
}

var initialValue = [
  { id: 1, description: "Income", value: 10000, isExpense: false },
  { id: 2, description: "Water Bill", value: 10, isExpense: true },
  { id: 3, description: "Rent", value: 50, isExpense: true },
  { id: 4, description: "Power Bill", value: 10, isExpense: true },
];
