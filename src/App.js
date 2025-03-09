import "./App.css";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import General from "./views/GeneralPage.jsx"
import Office from "./views/OfficePage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/office" element={<Office />} />
        </Routes>
      </Router>
      <div className="client">
        <div className="moving-text">TeckZy<span style={{color:"red"}}>Labs</span></div>
      </div>
    </div>
  );
}

export default App;
