import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ handleAllLightsOn, handleAllLightsOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleAllLightsOn={handleAllLightsOn}
        handleAllLightsOff={handleAllLightsOff}
      />
    </>
  );
}
