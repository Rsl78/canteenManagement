import React from 'react';
import Rating from "./Rating.jsx";

const TestimonialCard = () => {
    return (
        <div className="min-h-50 min-w-96 bg-white rounded-lg shadow-lg p-4 flex flex-col relative justify-between">
            <div className={"flex absolute right-5 top-8"}><Rating /></div>
            <div>
                <h1 className={" text-9xl opacity-20 h-15  w-15"}>&quot;</h1>
                <p className={"font-light pl-2 absolute top-13"}>&emsp;&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias officia quas, qui tempora veritatis voluptates?</p>
            </div>

            <div className={"gap-0 mb-2 pl-2"}>

                <p className={"text-sm text-gray-500 font-light"}>Md Roknuzzaman Rasel</p>
                <p className={"text-[12px] text-gray-400 font-light"}>20 min ago</p>
            </div>

        </div>

    );
};

export default TestimonialCard;