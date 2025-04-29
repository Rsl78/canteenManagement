import React from 'react';
import eggPlater from "../../assets/image/eggPlater.png"
import takaIcon from "../../assets/icon/taka.svg";
import arrowIcon from "../../assets/icon/arrow.svg";
import { useNavigate } from "react-router";
const FeaturedFoodCard = ({item}) => {
    const navigate = useNavigate();
    const {food_name, food_desc, image_url,food_price} = item;
    return (
        <div className={"min-h-85 min-w-70 bg-white  rounded-lg shadow-lg p-4 flex flex-col items-center justify-center "}>
            <div className="flex flex-col items-center justify-center pb-2">
                <img
                    src={image_url}
                    alt="Food"
                    className="items-center  w-50 h-40 mb-2"
                />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{food_name}</h3>
                <p className="text-sm text-gray-600">{food_desc}</p>

                <div className={"flex justify-between pt-3"}>
                    <div className={"  flex justify-center  items-center  "}>
                        <p className="flex items-center text-gray-600 font-semibold text-lg align-middle"> <span><img className={"h-5 w-5"} src={takaIcon} alt="arrow"/></span> {food_price}</p>
                    </div>
                    <button onClick={() => navigate("/menu") } className="btn bg-dark-emerald text-white  rounded-full items-center py-0.5 mt-1">
                        <span className="text-white font-base align-middle">Order Now</span>
                        <img className='h-6 w-6' src={arrowIcon} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodCard;