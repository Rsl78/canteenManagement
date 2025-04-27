import CategoryCard from "./CategoryCard.jsx";

// icon import
import breakfastIcon from "../../assets/icon/breakfast.svg"
import lunchIcon from "../../assets/icon/lunch.svg"
import dinnerIcon from "../../assets/icon/dinner.svg"
import snackIcon from "../../assets/icon/sancks.svg"
import beverageIcon from "../../assets/icon/beverage.svg"
import iceCreamIcon from "../../assets/icon/iceCream.svg"
import dessertIcon from "../../assets/icon/dessert.svg"


const CategorySection = () => {
    return (
        <div className="container mx-auto items-center">
            <div className="flex justify-between gap-10 m-10 overflow-x-scroll no-scrollbar">
                <CategoryCard icon={breakfastIcon} title={"Breakfast"} />
                <CategoryCard icon={lunchIcon} title={"Lunch"} />
                <CategoryCard icon={dinnerIcon} title={"Dinner"} />
                <CategoryCard icon={snackIcon} title={"Snack"} />
                <CategoryCard icon={beverageIcon} title={"Beverage"} />
                <CategoryCard icon={iceCreamIcon} title={"Ice Cream"} />
                <CategoryCard icon={dessertIcon} title={"Dessert"} />
            </div>
        </div>
    );
};

export default CategorySection;