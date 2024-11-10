import Tab from "./Tab";
import "./Tabs.css";

export default function Tabs() {
  return (
    <>
      <section className="entriesAndTabs__tabs">
        <Tab variant="all" isActive={true} />
        <Tab variant="favorites" isActive={false} />
      </section>
    </>
  );
}
