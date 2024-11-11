import "./EntryList.css";
import Entry from "./Entry";

export default function EntryList() {
  return (
    <ul className="entryList">
      <Entry isFavorite={true} />
      <Entry isFavorite={false} />
      <Entry isFavorite={false} />
    </ul>
  );
}
