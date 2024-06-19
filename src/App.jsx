import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Partner from "./pages/Partner.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/partner" element={<Partner />} />
      </Routes>
    </Router>
  );
}

export default App;
