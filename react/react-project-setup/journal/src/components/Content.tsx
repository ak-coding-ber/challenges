import "./Content.css";

import NewEntryForm from "./NewEntryForm";
import Tabs from "./Tabs";
import EntryList from "./EntryList";

export default function Content() {
  return (
    <main className="content">
      <NewEntryForm />
      <Tabs />
      <EntryList />
    </main>
  );
}
