import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Card from "../components/Card";
import ShortCartCard from "../components/ShortCart/ShortCartCard.jsx";
import DetailsModal from "../components/Modal/DetailsModal.jsx";
import MenuPageHeroContent from "../components/HeroSection/MenuPageHeroContent.jsx";
import { useLoaderData } from "react-router";
import InstructionBox from "../components/Cart/InstructionBox.jsx";

const MenuPage = () => {
    const initialMenuItems = useLoaderData();
    const [menuItems, setMenuItems] = useState(initialMenuItems);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCardButtonClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleSearch = (searchQuery) => {
        if (searchQuery === "") {
            setMenuItems(initialMenuItems);
            return;
        }
        fetch(`http://192.168.68.157:8083/searchfoods?food_name=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
            .catch((error) => console.error("Error searching foods:", error));
    };

    return (
        <div className="bg-eggshell-white min-h-screen">
            <HeroSection>
                <MenuPageHeroContent onSearch={handleSearch} />
            </HeroSection>
            <div className="container mx-auto py-10">
                {showModal && (
                    <DetailsModal item={selectedItem} setShowModal={setShowModal} />
                )}
                <div className="grid grid-cols-7 gap-6">
                    <div className="col-span-5">
                        <div className="h-[calc(100vh-250px)] no-scrollbar overflow-y-auto pr-4">
                            <div className="flex flex-wrap justify-evenly gap-y-6">
                                {menuItems?.map((item) => (
                                    <Card
                                        key={item.food_id}
                                        item={item}
                                        onCardButtonClick={handleCardButtonClick}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm sticky top-24 p-4">
                            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                            <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar mb-16">
                                <div className="space-y-3">
                                    {Array.from({ length: 10 }).map((_, index) => (
                                        <ShortCartCard key={index} itemName={index} />
                                    ))}
                                </div>

                                <InstructionBox/>
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                <button className="btn bg-dark-emerald hover:bg-dark-emerald/80 text-white px-8 py-1 rounded-full shadow-md">
                                    Add To Cart
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