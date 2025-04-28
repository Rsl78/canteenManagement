import image from "../assets/image/hamburger.jpg"
import arrowIcon from "../assets/icon/arrow.svg"
// import priceTagIcon from "../assets/icon/priceTagIcon.svg"
import priceIcon from "../assets/icon/priceTag.svg"
import takaIcon from "../assets/icon/taka.svg"

const Card = ({item, onCardButtonClick}) => {
    const {
        image_url, food_name, food_type,food_desc, food_price
    } = item;
    return (
        <div className="w-[500px] grid grid-cols-5 gap-6 px-4  h-50 bg-white rounded-lg">
            <div className="col-span-2 h-50  flex justify-center items-center  ">
                <img className="roudnded  h-[80%] rounded-lg " src={image_url}/>
            </div>
            <div className="col-span-3    flex justify-center flex-col py-2">
                <div className="">
                    <p className="uppercase font-semibold text-[11px] text-dark-emerald pb-0">{food_type
                    }</p>
                    <h1 className="text-xl pb-1 text-gray-700 font-bold">{food_name} </h1>

                    <p className="text-gray-600 font-light text-sm ">
                        {food_desc}
                    </p>

                    <div className={"flex space-x-1 py-1 pt-2 items-center"}>
                        <div
                            className={" border flex justify-center bg-green-100 items-center px-2  rounded-full space-x-1"}>
                            <img className={"h-3 w-3"} src={priceIcon} alt="arrow"/>
                            <p className="text-gray-600 font-semibold text-sm  ">Price</p>
                        </div>
                        <div className={"  flex justify-center  items-center  "}>

                            <p className="flex items-center text-gray-600 font-semibold text-sm align-middle"><span><img
                                className={"h-3 w-3"} src={takaIcon} alt="arrow"/></span> {food_price}</p>
                        </div>
                        {/*<p className={"font-semibold text-sm text-gray-600 "}>200</p>*/}
                    </div>

                    <button onClick={() => onCardButtonClick(item)} className="btn bg-dark-emerald text-white  rounded-md items-center py-1 mt-1">
                        <span className="text-white font-base align-middle">Order Now</span>
                        <img className='h-6 w-6' src={arrowIcon} alt=""/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;