import { useState } from 'react';
import { FaBookmark, FaPlus, FaSearch, FaTrashAlt, FaEdit, FaExternalLinkAlt, FaFacebook } from 'react-icons/fa';
import BookmarkForm from '../components/BookmarkForm';
import ConfirmDialog from '../components/ConfirmDialog';

export default function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'React Documentation Default', url: 'https://reactjs.org', tags: ['development', 'frontend'] },
    { id: 2, title: 'Tailwind CSS Default', url: 'https://tailwindcss.com', tags: ['css', 'frontend'] },
    { id: 3, title: 'GitHub Default', url: 'https://github.com', tags: ['development', 'tools'] }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingBookmark, setEditingBookmark] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [bookmarkToDelete, setBookmarkToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBookmarks = bookmarks.filter(bm => 
    bm.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bm.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bm.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSave = (bookmark) => {
    if (editingBookmark) {
      setBookmarks(bookmarks.map(bm => bm.id === bookmark.id ? bookmark : bm));
    } else {
      setBookmarks([...bookmarks, bookmark]);
    }
    setShowForm(false);
    setEditingBookmark(null);
  };

  const handleDelete = (id) => {
    setBookmarks(bookmarks.filter(bm => bm.id !== id));
    setShowConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center">
            <FaBookmark className="text-indigo-400 text-3xl mr-3" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              My One Time Bookmarks
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search bookmarks..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                setEditingBookmark(null);
                setShowForm(true);
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaPlus className="mr-2" />
              Add Bookmark
            </button>
          </div>
        </div>

        {/* Bookmarks Grid */}
        {filteredBookmarks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookmarks.map((bookmark) => (
              <div key={bookmark.id} className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <FaExternalLinkAlt className="text-indigo-400 mr-2" />
                    {bookmark.title}
                  </h3>
                  <a 
                    href={bookmark.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors"
                    title="Open link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <a 
                  href={bookmark.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-indigo-400 text-sm mb-4 truncate hover:text-indigo-300 transition-colors"
                >
                  {bookmark.url}
                </a>

                {bookmark.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bookmark.tags.map((tag, i) => (
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
                    onClick={() => {
                      setEditingBookmark(bookmark);
                      setShowForm(true);
                    }}
                    className="text-gray-400 hover:text-yellow-400 px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                  >
                    <FaEdit className="mr-2" />
                    Edit
                  </button>
                  <button 
                    onClick={() => {
                      setBookmarkToDelete(bookmark.id);
                      setShowConfirm(true);
                    }}
                    className="text-gray-400 hover:text-red-400 px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                  >
                    <FaTrashAlt className="mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
            <h3 className="text-xl font-medium text-gray-300 mb-2">
              {searchTerm ? "No matching bookmarks found" : "Your bookmark collection is empty"}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchTerm 
                ? `No bookmarks match your search for "${searchTerm}"`
                : "Add your first bookmark to get started"}
            </p>
            {!searchTerm && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <FaPlus className="mr-2" />
                Add Bookmark
              </button>
            )}
          </div>
        )}

        {/* Bookmark Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 w-full max-w-md">
              <BookmarkForm 
                onSave={handleSave} 
                onCancel={() => {
                  setShowForm(false);
                  setEditingBookmark(null);
                }} 
                editData={editingBookmark}
              />
            </div>
          </div>
        )}

        {/* Confirm Delete Dialog */}
        {showConfirm && (
          <ConfirmDialog 
            onConfirm={() => handleDelete(bookmarkToDelete)}
            onCancel={() => {
              setShowConfirm(false);
              setBookmarkToDelete(null);
            }}
            title="Delete Bookmark"
            message="Are you sure you want to delete this bookmark? This action cannot be undone."
          />
        )}
      </div>
    </div>
  );
}