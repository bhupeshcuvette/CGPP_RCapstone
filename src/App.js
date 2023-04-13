import './App.css';
import Register from "./pages/Register";
import Entertainment from "./pages/Entertainment";
import Homepage from "./pages/Homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/entertainment" element={<Entertainment/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
