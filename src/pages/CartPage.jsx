import React from 'react';
import ShortCartCard from "../components/ShortCart/ShortCartCard.jsx";
import CartCard from "../components/Cart/CartCard.jsx";
import CartButton from "../components/Cart/CartButton.jsx";
import InstructionBox from "../components/Cart/InstructionBox.jsx";

const CartPage = () => {
    return (
        <div className={"bg-eggshell-white min-h-screen "}>
            <div className={"container mx-auto py-10 pt-40 flex flex-col justify-center items-center"}>
                <div className="bg-white rounded-2xl w-[700px] shadow-sm sticky top-24 p-4 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-semibold mb-4">Cart Details</h3>
                    <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar pb-5">
                        <div className="space-y-3">
                            {/* Content for your fixed sidebar */}
                            {
                                // Example of a summary item
                                Array.from({ length: 10 }).map((_, index) => (
                                    <CartCard key={{index}} itemName = {index}/>
                                ))
                            }

                            <InstructionBox/>
                        </div>

                    </div>
                    <CartButton/>
                </div>
            </div>
        </div>
    );
};

export default CartPage;