import image from "../assets/image/hamburger.jpg"
import arrowIcon from "../assets/icon/arrow.svg"

const Card = () => {
    return (
        <div className="w-[500px] grid grid-cols-5 gap-6 px-4  h-50 bg-white rounded-lg">
            <div className="col-span-2 flex justify-center items-center">
                <img className="roudnded rounded-lg " src={image}/>
            </div>
            <div className="col-span-3  flex justify-center items-center flex-col py-2">
                <div className="space-y-1">
                    <p className="uppercase font-semibold text-sm text-dark-emerald pb-0">Spanish Cuisien</p>
                    <h1 className="text-xl text-gray-700 font-bold">Bread Omelette </h1>

                    <p className="text-gray-600 font-light text-sm ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, esse!
                    </p>

                    <p className="text-gray-600 font-semibold text-sm ">Price: 200</p>

                    <button className="btn bg-dark-emerald text-white rounded rounded-md items-center py-1 mt-1">
                        <span className="text-white font-base align-middle">Order Now</span>
                        <img className='h-6 w-6' src={arrowIcon} alt=""/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;