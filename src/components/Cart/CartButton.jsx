import arrowIcon from "../../assets/icon/arrow.svg";


const CartButton = ({onButtonClick}) => {
    return (
        <button onClick={onButtonClick} className="btn bg-dark-emerald text-white  rounded-md items-center py-1 mt-1 w-[300px]">
            <span className="text-white font-base align-middle">Add to cart</span>

        </button>
    );
};

export default CartButton;