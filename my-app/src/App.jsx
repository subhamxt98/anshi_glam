// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";           // ✅ import
import About from "./pages/about";
import Contact from "./pages/contact";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />       {/* ✅ ye add karo */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;