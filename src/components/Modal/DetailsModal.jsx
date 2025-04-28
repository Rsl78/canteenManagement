import IncreaseDecreaseButton from "../IncreaseDecreaseButton.jsx";
import CartButton from "../Cart/CartButton.jsx";

const DetailsModal = ({item, setShowModal}) => {
    const {
        image_url, food_name, food_desc, food_price
    } = item;

    const handleModalButtonClick = () =>{
        setShowModal(false);
    }
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white/70  z-50">
            <div  className="relative bg-white shadow rounded-lg overflow-hidden w-[650px] max-w-5xl max-h-[90vh] flex flex-col">

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(false);
                    }}
                    className="absolute top-3 right-3 z-10 p-1 rounded-full bg-white/80 shadow-md hover:bg-gray-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className={"flex justify-center bg-green-100 items-center"}>
                    <img className={" h-70 w-70 "} src={image_url} alt=""/>
                </div>
                {/*<p>{image_url}</p>*/}
                <div className={"p-5"}>
                    <div className={"font-bold text-xl space-y-2"}>
                        <h3 >{food_name}</h3>
                        <h3>{food_price}</h3>
                        <p className={"text-sm font-extralight"}>{food_desc}</p>
                    </div>

                    <div>
                        <hr className="h-px bg-gray-200 border-0 my-3" />
                        <h3 className={"font-bold text-xl py-1"}>Special Instruction</h3>
                        <p className={"text-xs font-extralight"}>Special requests are subject to the restaurant's approval. Tell us here!</p>
                        <textarea
                            className="w-full mt-5 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 text-sm text-gray-600"
                            placeholder="Add your special instructions here..."
                            rows={4}
                        ></textarea>
                    </div>
                </div>

                <div>
                    <hr className="h-px bg-gray-200 border-0 my-3" />
                    <div className={"pb-3 flex justify-between px-5"}>
                    <IncreaseDecreaseButton/>
                        <CartButton onButtonClick ={handleModalButtonClick} />
                    </div>
                </div>




            </div>
        </div>
    );
};

export default DetailsModal;