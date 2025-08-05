
import BookmarkItem from "./BookmarkItem";
import { FaBookmark, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function BookmarkList({ bookmarks, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBookmarks = bookmarks.filter(bm => 
    bm.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bm.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bm.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center">
          <FaBookmark className="text-indigo-400 text-3xl mr-3" />
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            My Bookmarks
          </h2>
          <span className="ml-3 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
            {bookmarks.length} {bookmarks.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        
        <div className="relative w-full md:w-64">
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
      </div>

      {/* Bookmarks Grid */}
      {filteredBookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBookmarks.map((bm) => (
            <BookmarkItem 
              key={bm.id} 
              item={bm} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
          {searchTerm ? (
            <>
              <h3 className="text-xl font-medium text-gray-300 mb-2">
                No bookmarks found
              </h3>
              <p className="text-gray-500">
                No bookmarks match your search for "{searchTerm}"
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-medium text-gray-300 mb-2">
                Your bookmark collection is empty
              </h3>
              <p className="text-gray-500">
                Add your first bookmark to get started
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
