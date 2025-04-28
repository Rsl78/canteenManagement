import React from 'react';
import { useNavigate } from 'react-router';

const HomePageHeroContent = () => {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/menu');
    };

    return (
        <div className="max-w-md my-20">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
            </p>
            <button
                className="btn bg-dark-emerald hover:bg-dark-emerald/80 backdrop-blur-sm border border-white/30 text-white focus:outline-none active:border-transparent"
                onClick={handleOrderNowClick}
            >
                Order Now
            </button>
        </div>
    );
};

export default HomePageHeroContent;