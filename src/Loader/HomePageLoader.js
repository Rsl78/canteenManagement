import axios from 'axios';

export const homePageLoader = async  () =>{
    try {
        const featuredFoodResponse = await axios.get("http://192.168.68.157:8083/featuredfoodlist");
        const testimonialsResponse = await axios.get("http://192.168.68.157:8083/reviews")

        const featuredFood = featuredFoodResponse.data;
        const testimonials = testimonialsResponse.data;
        return {
            featuredFood,
            testimonials
        };
    } catch (error) {
        console.error("Failed to fetch menu items:", error);
        console.error('Error loading data:', error);
        return null;
    }
}