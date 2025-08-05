
import { FaExclamationTriangle, FaTrash, FaTimes } from 'react-icons/fa';

export default function ConfirmDialog({ onConfirm, onCancel, title = "Delete Bookmark", message = "Are you sure you want to delete this bookmark?" }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Dialog Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-red-500/20 mr-3">
              <FaExclamationTriangle className="text-red-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <button 
            onClick={onCancel}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Dialog Body */}
        <div className="p-6">
          <p className="text-gray-300">{message}</p>
        </div>

        {/* Dialog Footer */}
        <div className="flex justify-end space-x-3 p-5 bg-gray-800/50 border-t border-gray-700">
          <button
            onClick={onCancel}
            className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center"
          >
            <FaTrash className="mr-2" />
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}