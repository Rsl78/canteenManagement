import {useNavigate} from "react-router";

const CategoryCard = ({icon, title, category}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/menu/${category}`)} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 min-w-40 min-h-40 space-y-2">
            <img className="h-15 w-15" src={icon} alt="" />
            <h3 className="font-semibold text-sm">{title}</h3>
        </div>
    );
};

export default CategoryCard;