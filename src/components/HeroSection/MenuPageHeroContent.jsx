
import React, { useState } from 'react';

const MenuPageHeroContent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    return (
        <div className="w-full max-w-3xl mx-auto my-20 px-4">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
                <p className="mb-6">Find your favorite dishes</p>

                {/* Centered search input */}
                <div className="w-full max-w-xl relative">
                    <input
                        type="text"
                        placeholder="Search for dishes..."
                        className="input w-full bg-white/20 backdrop-blur-sm border rounded-full border-white/30 text-white placeholder-white/70 pr-10 focus:outline-dark-emerald focus:border-dark-emerald focus:ring-0"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    {/*<div className="absolute inset-y-0 right-0 flex items-center pr-3">*/}
                    {/*    /!* Search icon would go here *!/*/}
                    {/*</div>*/}
                </div>

                {/* Controls row */}
                <div className="flex justify-center gap-4 w-full max-w-xl mt-2">
                    {/* Filter Dropdown */}
                    <select
                        className="select bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:border-transparent focus:ring-0 [&>option]:text-black"
                        value={selectedFilter}
                        onChange={handleFilterChange}
                    >
                        <option value="all">All Categories</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="desserts">Desserts</option>
                        <option value="drinks">Drinks</option>
                    </select>

                    <button className="btn bg-dark-emerald hover:bg-dark-emerald/80 backdrop-blur-sm border border-white/30 text-white focus:outline-none active:border-transparent">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuPageHeroContent;
