import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./compontes/header/Header";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Footer from "./compontes/Footer/Footer";
import Singup from "./page/Singup";
import Delivery from "./page/Delivery";
import AllProducts from "./page/AllProducts";

function App() {
  return (
    <>
      <BrowserRouter basename="/Topico">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delevry" element={<Delivery />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
