import './App.css';
import Welcome from './welcome/Welcome';
import StepA from './stepA/StepA';
import StepB from './stepB/StepB';
import StepC from './stepC/StepC';
import StepD from './stepD/StepD';
import StepE from './stepE/StepE';
import Headers from './header/Header';
import Events from './events/Events';
import Map from './map/Map';

function App() {
  return (
    <div className="App">
      {/* <Welcome/> */}
      {/* <Headers/> */}
      <StepA/>
      <StepB/>
      <Events/>
      {/* <StepC/> */}
      <StepD/>
      <Map/>
      <StepE/>
    </div>
  );
}

export default App;
