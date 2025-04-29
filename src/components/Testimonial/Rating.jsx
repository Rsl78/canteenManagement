import React from 'react';
import starIcon from "../../assets/icon/star.svg";
import starFilledIcon from "../../assets/icon/starFilled.svg";
const Rating = ({rate}) => {
    const emptyStar = 5-rate;
    return (

            <div className="flex items-center justify-center">
                {
                    [...Array(rate)].map((_, index) => (
                        <img key={index} className={"h-4 w-4"} src={starFilledIcon} alt="star" />
                    ))
                }
                {
                    [...Array(emptyStar)].map((_, index) => (
                        <img key={index} className={"h-4 w-4"} src={starIcon} alt="star" />
                    ))
                }
                {/*<img className={"h-4 w-4"} src={starFilledIcon} alt="star" />*/}
                {/*<img className={"h-4 w-4"} src={starFilledIcon} alt="star" />*/}
                {/*<img className={"h-4 w-4"} src={starFilledIcon} alt="star" />*/}
                {/*<img className={"h-4 w-4"} src={starFilledIcon} alt="star" />*/}
                {/*<img className={"h-4 w-4"} src={starIcon} alt="star" />*/}

                {/*<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />*/}
                {/*<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star"  />*/}
                {/*<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />*/}
                {/*<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />*/}
                {/*<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked/>*/}
            </div>

    );
};

export default Rating;