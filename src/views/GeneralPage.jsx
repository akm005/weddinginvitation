import StepA from "../stepA/StepA";
import StepB from "../stepB/StepB";
import StepD from "../stepD/StepD";
import StepE from "../stepE/StepE";
import Headers from "../header/Header";
import Events from "../events/Events";
import Map from "../map/Map";

export default function General() {
  return (
    <>
    <div>anup</div>
      <Headers />
      <StepA />
      <StepB />
      <Events />
      <StepD />
      <Map />
      <StepE />
    </>
  );
}
