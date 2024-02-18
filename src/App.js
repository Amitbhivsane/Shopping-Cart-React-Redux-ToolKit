import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Navebar from "./component/Navebar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
