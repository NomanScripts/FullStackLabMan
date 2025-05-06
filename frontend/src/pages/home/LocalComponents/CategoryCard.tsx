interface CategoryCardProps {
    title: string;
    totalLabs: number;
}
import labIcon from "../../../assets/images/lab-icon.png";
const CategoryCard = ({ title, totalLabs }: CategoryCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-50 border border-gray-200">
        <div className="flex items-center">
            <img src={labIcon} alt="Web Development" className="w-6 h-6" />
        </div>
        <div className="flex flex-col mt-4 text-sm font-semibold text-dark-100">
            <h1>{title}</h1>
        </div>
        <div className="flex items-center text-gray-500 text-xs">
            <p>{totalLabs} labs</p>
        </div>
    </div>
  )
}

export default CategoryCard