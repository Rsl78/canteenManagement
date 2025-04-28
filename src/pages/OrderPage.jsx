import React from 'react';
import OrdersCard from "../components/Orders/OrdersCard.jsx";

const OrderPage = () => {
    return (
        <div className="bg-eggshell-white min-h-screen">
            <div className={"container mx-auto py-10 pt-20 flex flex-col justify-center items-center gap-3"}>

                <OrdersCard/>
                <OrdersCard/>
                <OrdersCard/>
                <OrdersCard/>
                <OrdersCard/>
                <OrdersCard/>
            </div>
        </div>
    );
};

export default OrderPage;