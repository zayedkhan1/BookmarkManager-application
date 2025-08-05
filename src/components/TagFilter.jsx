
import { FaFilter, FaTimes } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';

export default function TagFilter({ tags, active, onSelect }) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <FiTag className="text-indigo-400 mr-2 text-xl" />
        <h3 className="text-lg font-semibold text-gray-300">Filter Bookmarks</h3>
        {active && (
          <button 
            onClick={() => onSelect(null)}
            className="ml-2 text-gray-400 hover:text-white text-sm flex items-center"
          >
            <FaTimes className="mr-1" />
            Clear
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button 
          onClick={() => onSelect(null)} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
            !active 
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {!active && <FaFilter className="mr-2" />}
          All
        </button>
        
        {tags.map(tag => (
          <button 
            key={tag} 
            onClick={() => onSelect(tag)} 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              active === tag 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}