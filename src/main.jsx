import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import {RouterProvider} from "react-router";
import {router} from "./router/router.js";
import AuthProvider from "./providers/AuthProvider.jsx";


createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>

);


// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <BrowserRouter>
//             {/*<App />*/}
//             <Routes>
//                 <Route path="/" element={<App/>}>
//                     <Route index element={<HomePage/>}/>
//                     <Route path="login" element={<LoginPage/>}/>
//                     <Route path="register" element={<RegistrationPage/>}/>
//                     <Route path="order" element={<OrderPage/>}/>
//                     <Route path="menu" element={<MenuPage/>}
//                            loader={async () => {
//                         const response = await axios.get("http://192.168.68.157:8083/foodlist")
//                         console.log(response.data)
//                         return response.data;
//                     }}
//                     />
//                     <Route path="cart" element={<CartPage/>}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//
//     </StrictMode>
// );