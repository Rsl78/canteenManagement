import React, {useState, useEffect} from "react";

const MenuPageHeroContent = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Debounce using useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchQuery);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchQuery, onSearch]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    // const handleClick = () => {
    //     if (onSearch && searchQuery) {
    //         onSearch(searchQuery);
    //     }
    // };

    return (
        <div className="w-full max-w-3xl  mx-auto my-20 px-4">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
                <p className="mb-6">Find your favorite dishes</p>
                <div className={"flex w-120 items-center justify-center gap-4"}>
                    <div className="w-full max-w-xl relative">
                        <input
                            type="text"
                            placeholder="Search for dishes..."
                            className="input w-full bg-white/20 backdrop-blur-sm border rounded-full border-white/30 text-white placeholder-white/70 pr-10 focus:outline-dark-emerald focus:border-dark-emerald focus:ring-0"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    {/*<button*/}
                    {/*    onClick={handleClick}*/}
                    {/*    className="btn bg-dark-emerald hover:bg-dark-emerald/80 backdrop-blur-sm border border-white/30 text-white focus:outline-none active:border-transparent"*/}
                    {/*>*/}
                    {/*    Search*/}
                    {/*</button>*/}
                </div>

            </div>
        </div>
    );
};

export default MenuPageHeroContent;