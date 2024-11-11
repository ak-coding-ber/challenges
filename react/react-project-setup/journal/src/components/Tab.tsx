import "./Tab.css";

interface TabProps {
  variant: "all" | "favorites";
  isActive: boolean;
}

export default function Tab({ variant, isActive }: TabProps) {
  return (
    <div className="tab">
      <button className={isActive ? "tab__button--active" : "tab__button"}>
        {variant === "all" ? "All Entries" : "Favorites"}
      </button>
      <p className={isActive ? "tab__count--active" : "tab__count"}>
        {variant === "all" ? "3" : "1"}
      </p>
    </div>
  );
}
