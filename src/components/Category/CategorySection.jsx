import CategoryCard from "./CategoryCard.jsx";

// icon import
import breakfastIcon from "../../assets/icon/breakfast.svg"
import lunchIcon from "../../assets/icon/lunch.svg"
import dinnerIcon from "../../assets/icon/dinner.svg"
import snackIcon from "../../assets/icon/snacks.svg"
import beverageIcon from "../../assets/icon/beverage.svg"
import iceCreamIcon from "../../assets/icon/iceCream.svg"
import dessertIcon from "../../assets/icon/dessert.svg"


const CategorySection = () => {
    return (
        <div className="container mx-auto items-center">
            <div className="flex justify-between gap-10 m-10 overflow-x-scroll no-scrollbar">
                <CategoryCard icon={breakfastIcon} title={"Breakfast"} category ={"Breakfast"} />
                <CategoryCard icon={lunchIcon} title={"Lunch"} category={"Lunch"}/>
                <CategoryCard icon={dinnerIcon} title={"Dinner"} category={"Dinner"} />
                <CategoryCard icon={snackIcon} title={"Snack"} category = {"Snacks"}/>
                <CategoryCard icon={beverageIcon} title={"Beverage"} category = {"Beverages"} />
                <CategoryCard icon={iceCreamIcon} title={"Ice Cream"} category = {"Icecream"}/>
                <CategoryCard icon={dessertIcon} title={"Dessert"} category ={"Dessert"} />
            </div>
        </div>
    );
};

export default CategorySection;