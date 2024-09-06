// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./App.css";

export default function App() {
  const [note, setNote] = useLocalStorageState("");
  const [font, setFont] = useLocalStorageState("system-ui");

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
