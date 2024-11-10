import NewEntryForm from "./NewEntryForm";
import EntriesAndTabs from "./EntriesAndTabs";
import "./Content.css";

export default function Content() {
  return (
    <main className="content">
      <NewEntryForm />
      <EntriesAndTabs />
    </main>
  );
}
