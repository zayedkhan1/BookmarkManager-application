
import { FaLink, FaEdit, FaTrash, FaExternalLinkAlt } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';

export default function BookmarkItem({ item, onEdit, onDelete }) {
  return (
    <div className="bg-gray-800 mt-10 rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
          <FaLink className="text-indigo-400 mr-2" />
          {item.title}
        </h3>
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 p-2 rounded-full hover:bg-gray-700 transition-colors"
          title="Open link"
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block text-gray-400 text-sm mb-4 truncate hover:text-indigo-400 transition-colors"
      >
        {item.url}
      </a>

      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <FiTag className="text-gray-500 mt-1" />
          {item.tags.map((tag, i) => (
            <span 
              key={i} 
              className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-end space-x-3 border-t border-gray-700 pt-4">
        <button 
          onClick={() => onEdit(item)}
          className="flex items-center text-gray-400 hover:text-yellow-400 px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <FaEdit className="mr-2" />
          Edit
        </button>
        <button 
          onClick={() => onDelete(item)}
          className="flex items-center text-gray-400 hover:text-red-400 px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}
