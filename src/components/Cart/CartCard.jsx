import React, {useState} from "react";
import foodImage from "../../assets/image/eggPlater.png";
import takaIcon from "../../assets/icon/taka.svg";
import IncreaseDecreaseButton from "../IncreaseDecreaseButton.jsx";
import DustbinIcon from "../../assets/icon/dustbin.svg";

const CartCard = ({itemName}) => {

    return (
        <div
            className="flex gap-5 py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
        >
            <div className={"flex items-center justify-center"}>
                <img className={"h-10 w-10"} src={foodImage} alt=""/>
            </div>
            <div className={"w-full"}>
                <div className={"flex items-center justify-between"}>
                    <h3 className="font-medium">Item {itemName + 1}</h3>
                    <button className={"bg-red-200 rounded-full p-1"} >
                        <img className={"h-5 w-5 "} src={DustbinIcon} alt=""/>
                    </button>
                </div>
                <p className={"text-gray-500 text-xs font-extralight"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum eius enim ipsa magnam perspiciatis!</p>
                <div className="flex justify-between items-center w-full mt-1 ">
                    <p className="flex items-center text-gray-600 font-semibold text-sm align-middle">
                        <span><img className="h-3 w-3" src={takaIcon} alt="arrow"/></span> 200 x 3 = 600
                    </p>
                    <IncreaseDecreaseButton/>
                </div>
            </div>
        </div>
    );
};

export default CartCard;