import React from 'react';
import {useNavigate} from 'react-router';
import logo from '../../assets/image/logo.png'

const HomePageHeroContent = () => {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/menu');
    };

    return (
        <div className="max-w-md flex flex-col justify-center items-center my-20">
            {/*<h1 className="mb-5 text-5xl font-bold">Hello there</h1>*/}
            <img className={"h-96 relative w-96"} src={logo} alt="logo"/>
            <p className="mb-5 absolute top-95  text-lg max-w-[550px] text-center">
                Discover the most delicious food in your area, featuring prepared dishes and regional specialties
                crafted with passion and premium ingredients, offering an unforgettable taste experience.
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