import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreCreators from "./Pages/ExploreCreators/ExploreCreators";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-creators" element={<ExploreCreators />} />
      </Routes>
    </Router>
  );
}

export default App;
