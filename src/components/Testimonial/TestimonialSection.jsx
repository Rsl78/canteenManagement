import React from 'react';
import TestimonialCard from "./TestimonialCard.jsx";

const TestimonialSection = ({testimonialsData}) => {
    // const {} = testimonialsData
    return (
        <div className="overflow-hidden w-full py-8 container mx-auto">
            <div className="mb-6 flex flex-col items-start">
                <h2 className="text-3xl font-bold">Testimonial</h2>
                <div className="h-1 bg-dark-emerald w-22"></div>
            </div>
            <div className="flex animate-[scroll_20s_linear_infinite] gap-5">
                {
                    testimonialsData?.map(testimonial => <TestimonialCard key={testimonial.ReviewId} testimonial={testimonial}/>)
                }

                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*/!* Duplicate cards for seamless looping *!/*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
                {/*<TestimonialCard/>*/}
            </div>
        </div>
    );
};

export default TestimonialSection;