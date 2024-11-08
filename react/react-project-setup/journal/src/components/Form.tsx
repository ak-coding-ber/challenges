import "./Form.css";

export default function Form() {
  return (
    <form className="newEntryForm" action="submit">
      <label htmlFor="motto" className="newEntryForm__label">
        Motto
      </label>
      <input
        id="motto"
        className="newEntryForm__input"
        type="text"
        name="motto"
      />
      <label htmlFor="notes" className="newEntryForm__label">
        Notes
      </label>
      <textarea id="notes" className="newEntryForm__textarea" name="notes" />
    </form>
  );
}
