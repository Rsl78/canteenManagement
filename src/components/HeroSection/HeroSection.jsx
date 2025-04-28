import homepageHeroImage from "../../assets/image/homepageBanner.jpg";
import React from "react";

const HeroSection = ({ ref,children }) => {
  return (
    <div
      ref={ref}
      className="hero"
      style={{
        backgroundImage: `url(${homepageHeroImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content h-120 text-neutral-content text-center">
          {/*<div className="max-w-md my-20">*/}
          {/*    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>*/}
          {/*    <p className="mb-5">*/}
          {/*        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda*/}
          {/*        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et*/}
          {/*        a id nisi.*/}
          {/*    </p>*/}
          {/*    <button className="btn btn-primary">Order Now</button>*/}
          {/*</div>*/}
          {children}
      </div>
    </div>
  );
};

export default HeroSection;
