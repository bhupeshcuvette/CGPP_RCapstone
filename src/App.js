import './App.css';
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
