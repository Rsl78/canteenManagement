import React, {useState} from "react";


const IncreaseDecreaseButton = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };
    return (
        <div className="flex items-center gap-2">
            <button
                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                onClick={decrementQuantity}
            >
                <span className="font-bold text-gray-600">-</span>
            </button>
            <span className="text-sm font-medium">{quantity}</span>
            <button
                className="w-6 h-6 bg-dark-emerald rounded-full flex items-center justify-center hover:bg-emerald-700"
                onClick={incrementQuantity}
            >
                <span className="font-bold text-white">+</span>
            </button>
        </div>
    );
};

export default IncreaseDecreaseButton;