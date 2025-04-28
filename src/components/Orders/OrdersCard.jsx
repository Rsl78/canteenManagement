import foodImage from "../../assets/image/eggPlater.png"
import starIcon from "../../assets/icon/star.svg"
// import divider from "daisyui/components/divider/index.js";

const OrdersCard = () => {
    return (
        <div className={"bg-white shadow-md rounded-lg  w-[700px] "}>
            <div className={"flex gap-2 pt-6 px-4 "}>
                <div className={"w-[15%] flex justify-center items-center"}>
                    <img className={"flex items-center h-20 w-20"} src={foodImage}/>
                </div>
                <div className={" w-full"}>
                    <div className={"flex justify-between items-center font-semibold text-xl text-gray-700"}>
                        <h2>Hamburger</h2>
                        <h2>Tk1000</h2>
                    </div>
                    <div className={"font-extralight text-xs text-gray-500 gap-0"}>
                        <p>Delivered on Fri, Nov 8, 7:24 PM</p>
                        <p>Order ID: 123456789</p>
                    </div>
                    <div>
                        <ul className={"font-light text-sm text-gray-600"}>
                            <li>1 x food 1</li>
                            <li>1 x food 2</li>
                            <li>food 3</li>
                            <li>food 4</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="h-px bg-gray-200 border-0 my-2" />
            <div className={"pl-27 pb-2 font-light text-sm text-gray-500"}>
                <p className={"flex  items-center gap-0.5"}>You rated this <img className={"h-3 w-3"} src={starIcon}/> 5 </p>
            </div>

        </div>

    );
};

export default OrdersCard;