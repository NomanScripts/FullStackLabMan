interface LabCardProps {
  title: string;
  difficulty: string;
  category: string;
  description: string;
  xp: number;
  onClick?: () => void;
}

export const LabCard = ({ title, difficulty, category, description, xp, onClick }: LabCardProps) => {
  return (
    <div className="bg-gray-100 p-1 rounded-md">
      <div className="bg-white p-1 shadow-md overflow-hidden rounded-md">
        <div className="px-3 py-2">
          <h2 className="text-lg font-bold">{title}</h2>

          <div className="flex gap-2 mt-5">
            <span className={`${
              difficulty === 'Beginner' 
                ? 'bg-chips-blue' 
                : difficulty === 'Intermediate' 
                  ? 'bg-chips-purple' 
                  : 'bg-chips-yellow'
            } text-dark-100 text-xs font-medium px-3 py-1 rounded-md font-semibold`}>
              {difficulty}
            </span>
            <span className="bg-gray-100 font-medium text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
              {category}
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 my-3"></div>
        <div className="px-3 py-2 mb-6">
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-center p-3 rounded-b-lg">
        <span className="text-gray-900 font-medium text-sm">{xp} XP</span>
        <button 
          onClick={onClick}
          className="bg-primaryOrange-100 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md text-xs font-medium"
        >
          View Lab
        </button>
      </div>
    </div>
  );
};

export default LabCard;
