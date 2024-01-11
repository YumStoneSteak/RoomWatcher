import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
