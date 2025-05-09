import React, { useState } from 'react';
import takaIcon from "../../assets/icon/taka.svg";
import foodImage from "../../assets/image/eggPlater.png"
import IncreaseDecreaseButton from "../IncreaseDecreaseButton.jsx";
import DustbinIcon from "../../assets/icon/dustbin.svg"

const ShortCartCard = ({itemName}) => {


    return (
        <div
            className="flex gap-5 py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
        >
            <div className={"flex items-center justify-center"}>
                <img className={"h-7 w-7"} src={foodImage} alt=""/>
            </div>
            <div className={"w-full"}>
                <div className={"flex items-center justify-between p-1"}>
                    <h3 className="font-medium">Item {itemName + 1}</h3>
                    <button className={"bg-red-200 rounded-full p-1"} >
                        <img className={"h-5 w-5 "} src={DustbinIcon} alt=""/>
                    </button>
                </div>
                <div className="flex justify-between items-center w-full mt-1 p-1">
                    <p className="flex items-center text-gray-600 font-semibold text-sm align-middle">
                        <span><img className="h-3 w-3" src={takaIcon} alt="arrow"/></span> 200
                    </p>
                    <IncreaseDecreaseButton/>
                </div>
            </div>
        </div>
    );
};

export default ShortCartCard;