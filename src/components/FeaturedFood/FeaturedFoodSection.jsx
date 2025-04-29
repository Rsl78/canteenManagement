import React from 'react';
import FeaturedFoodCard from "./FeaturedFoodCard.jsx";
import TestimonialCard from "../Testimonial/TestimonialCard.jsx";

const FeaturedFoodSection = ({featuredFoodData}) => {
    return (

        <div className="overflow-hidden w-full py-8 container mx-auto">
            <div className="mb-6 flex flex-col items-end">
                <h2 className="text-3xl font-bold">Featured Foods</h2>
                <div className="h-1 bg-dark-emerald w-22"></div>
            </div>


            <div className="flex animate-[scrollRTL_20s_linear_infinite] gap-5">
                {
                   featuredFoodData?.map(item => <FeaturedFoodCard key={item?.food_id} item={item}/>)
                }
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
                {/*/!* Duplicate cards for seamless looping *!/*/}
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
                {/*<FeaturedFoodCard/>*/}
            </div>
        </div>
    );
};

export default FeaturedFoodSection;