import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
import CategoryCard from "../components/Category/CategoryCard.jsx";
import CategorySection from "../components/Category/CategorySection.jsx";
import TestimonialSection from "../components/Testimonial/TestimonialSection.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import FeaturedFoodSection from "../components/FeaturedFood/FeaturedFoodSection.jsx";
import HomePageHeroContent from "../components/HeroSection/HomePageHeroContent.jsx";
import {useLoaderData} from "react-router";

const HomePage = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef(null);
  const {featuredFood, testimonials} = useLoaderData();

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

  const navbarTheme = isHeroVisible ? "glass" : "white";

  return (
    <div className="bg-eggshell-white space-y-20">
      <HeroSection ref={heroRef}>
          <HomePageHeroContent/>
      </HeroSection>
      {/*<HeroSection ref={heroRef} />*/}

      <CategorySection />
      <FeaturedFoodSection featuredFoodData={featuredFood}/>
      <TestimonialSection testimonialsData={ testimonials}/>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
