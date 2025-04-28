import React, {useState} from "react";
import foodImage from "../../assets/image/eggPlater.png";
import takaIcon from "../../assets/icon/taka.svg";

const CartCard = ({itemName}) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    return (
        <div
            className="flex gap-5 py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
        >
            <div className={"flex items-center justify-center"}>
                <img className={"h-7 w-7"} src={foodImage} alt=""/>
            </div>
            <div className={"w-full"}>
                <h3 className="font-medium">Item {itemName + 1}</h3>
                <p className={"text-gray-500 text-xs font-extralight"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum eius enim ipsa magnam perspiciatis!</p>
                <div className="flex justify-between items-center w-full mt-1 p-1">
                    <p className="flex items-center text-gray-600 font-semibold text-sm align-middle">
                        <span><img className="h-3 w-3" src={takaIcon} alt="arrow"/></span> 200 x 3 = 600
                    </p>
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
                </div>
            </div>
        </div>
    );
};

export default CartCard;