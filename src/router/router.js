import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import {createBrowserRouter} from "react-router";
import MenuPage from "../pages/MenuPage.jsx";
import {menuLoader} from "../Loader/MenuLoader.js";
import RegistrationPage from "../pages/RegistrationPage.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import {featuredFoodLoader} from "../Loader/FeaturedFoodLoader.js";
import {homePageLoader} from "../Loader/HomePageLoader.js";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage,
                // loader: featuredFoodLoader
                loader: homePageLoader
            },{
                path: "/login",
                Component: LoginPage,
            },{
                path: "/register",
                Component: RegistrationPage,
            },
            {
                path: "/order",
                Component: OrderPage,
            },
            {
                path: "/menu",
                Component: MenuPage,
                loader: menuLoader,
            },
            {
                path: "/cart",
                Component: CartPage,
            }

        ]
    }
])