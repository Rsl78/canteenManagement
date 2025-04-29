import React, {useState, useEffect} from "react";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Card from "../components/Card";
import ShortCartCard from "../components/ShortCart/ShortCartCard.jsx";
import CartButton from "../components/Cart/CartButton.jsx";
import DetailsModal from "../components/Modal/DetailsModal.jsx";
import MenuPageHeroContent from "../components/HeroSection/MenuPageHeroContent.jsx";
import {useLoaderData} from "react-router";

const MenuPage = () => {
    // const [menuItems, setMenuItems] = useState([]);
    const menuItems = useLoaderData()
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCardButtonClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    }

    // useEffect(() => {
    //     fetch("http://192.168.68.157:8083/foodlist").then((response) => response.json()).then(data => setMenuItems(data))
    // }, []);

    console.log('menuitems: ', menuItems)
    return (
        <div className="bg-eggshell-white min-h-screen">
            {/*<HeroSection/>*/}
            <HeroSection>
                <MenuPageHeroContent/>
            </HeroSection>
            <div className="container mx-auto py-10">
                {showModal && (
                    <DetailsModal item={selectedItem} setShowModal={setShowModal}
                    />)
                }
                <div className="grid grid-cols-7 gap-6">
                    {/* Scrollable card section */}
                    <div className="col-span-5 ">
                        <div className="h-[calc(100vh-250px)] no-scrollbar overflow-y-auto pr-4">
                            <div className="flex flex-wrap justify-evenly gap-y-6">
                                {
                                    menuItems?.map((item) => <Card key={item.food_id} item={item}
                                                                  onCardButtonClick={handleCardButtonClick}/>)
                                }
                            </div>
                        </div>
                    </div>



                    <div className="col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm sticky top-24 p-4 ">
                            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                            <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar mb-16">
                                <div className="space-y-3">
                                    {/* Content for your fixed sidebar */}
                                    {
                                        // Example of a summary item
                                        Array.from({length: 10}).map((_, index) => (
                                            <ShortCartCard key={index} itemName={index}/>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Fixed button at bottom center */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                <button
                                    className="btn bg-dark-emerald hover:bg-dark-emerald/80 text-white px-8 py-1 rounded-full shadow-md">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
