import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the hero section is at least 80% visible, use the glass theme.
                setIsHeroVisible(entry.intersectionRatio >= 0.8);
            },
            { threshold: [0.8] }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    const navbarTheme = isHeroVisible ? 'glass' : 'white';

    return (
        <div className="bg-eggshell-white">
            <Navbar theme={navbarTheme} />
            <div
                ref={heroRef}
                className="hero"
                style={{
                    backgroundImage:
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content min-h-screen text-neutral-content text-center">
                    <div className="max-w-md my-20">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
            <div className="container flex flex-wrap gap-4 justify-between mx-auto py-10">
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;