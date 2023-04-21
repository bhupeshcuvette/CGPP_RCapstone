import './App.css';
import Register from "./pages/Register";
import Entertainment from "./pages/Entertainment";
import Homepage from "./pages/Homepage";
import Browse from "./pages/Browse";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/entertainment" element={<Entertainment/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/browse" element={<Browse/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
