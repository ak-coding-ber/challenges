import "./EntriesAndTabs.css";
import Tabs from "./Tabs";
import EntryList from "./EntryList";

export default function EntrySection() {
  return (
    <section className="entriesAndTabs">
      <Tabs />
      <EntryList />
    </section>
  );
}
