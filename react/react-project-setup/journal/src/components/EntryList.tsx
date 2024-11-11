import "./EntryList.css";
import Entry from "./Entry";

export default function EntryList() {
  return (
    <ul className="entryList">
      <Entry />
      <Entry />
      <Entry />
    </ul>
  );
}
