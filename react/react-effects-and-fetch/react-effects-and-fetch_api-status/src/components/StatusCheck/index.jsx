import "./StatusCheck.css";
import { useState } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");
  // Something needs to change here…
  // ↙️
  function handleCheckApiStatus() {
    /**
     * Hint 1:
     * Use the `fetch()` function and pass the `apiStatusUrl` into it
     *
     * Hint 2:
     * The fetch function returns a promise which resolves to a Response
     * object once it is ready.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--
    async function fetchData() {
      try {
        setStatusIcon("⏳");
        const response = await fetch(apiStatusUrl);

        if (response.ok) {
          //show green checked icon
          setStatusIcon("✅");
        } else if (!response.ok) {
          // show red cross icon
          setStatusIcon("❌");
        }
      } catch (error) {
        setStatusIcon("🚨");
        console.error("Network Error", error);
      }
    }

    fetchData();
    // --^-- write your code here --^--
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
