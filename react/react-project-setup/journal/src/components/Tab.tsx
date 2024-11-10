import "./Tab.css";

interface TabProps {
  variant: "all" | "favorites";
  isActive: boolean;
}

export default function Tab({ variant, isActive }: TabProps) {
  return (
    <div className="entriesAndTabs__tab">
      <button
        className={
          isActive
            ? "entriesAndTabs__tab--buttonActive"
            : "entriesAndTabs__tab--button"
        }
      >
        {variant === "all" ? "All Entries" : "Favorites"}
      </button>
      <p
        className={
          isActive
            ? "entriesAndTabs__tab--countActive"
            : "entriesAndTabs__tab--count"
        }
      >
        {variant === "all" ? "3" : "1"}
      </p>
    </div>
  );
}
