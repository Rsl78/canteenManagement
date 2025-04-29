import axios from 'axios';

export const featuredFoodLoader = async  () =>{
    try {
        const response = await axios.get("http://192.168.68.157:8083/featuredfoodlist");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch menu items:", error);
        console.error('Error loading data:', error);
        return null;
    }
}