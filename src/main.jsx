import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import App from './App.jsx'
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            {/*<App />*/}
            <Routes>

                <Route index element={<HomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegistrationPage/>}/>
                <Route path="order" element={<OrderPage/>}/>

            </Routes>
        </BrowserRouter>
    </StrictMode>
)
