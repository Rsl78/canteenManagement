import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import App from './App.jsx'
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import MenuPage from "./pages/MenuPage.jsx"
import CartPage from "./pages/CartPage.jsx"



createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <BrowserRouter>
        {/*<App />*/}
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  </StrictMode>
);
