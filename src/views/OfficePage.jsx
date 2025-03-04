import StepA from "../stepA/StepA";
import StepB from "../stepB/StepB";
import StepE from "../stepE/StepE";
import Headers from "../header/Header";
import Events from "../events/Events";
import Map from "../map/Map";

export default function Office() {
  return (
    <>
      <Headers />
      <StepA />
      <StepB />
      <Events />
      <Map />
      <StepE />
    </>
  );
}
