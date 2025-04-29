// src/loaders/menuLoader.js
import axios from 'axios';

export const menuLoader = async  () =>{
    try {
        const response = await axios.get("http://192.168.68.157:8083/foodlist");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch menu items:", error);
        console.error('Error loading data:', error);
        return null;
    }
}