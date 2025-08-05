
import { useState, useEffect } from 'react';
import { FaLink, FaTag, FaSave, FaEdit, FaTimes } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function BookmarkForm({ onSave, editData, onCancel }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setUrl(editData.url);
      setTags(editData.tags.join(', '));
    } else {
      setTitle('');
      setUrl('');
      setTags('');
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    onSave({
      id: editData?.id || Date.now(),
      title,
      url,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          {editData ? 'Edit Bookmark' : 'Add New Bookmark'}
        </h2>
        {editData && (
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">
            Title
          </label>
          <div className="relative">
            <input
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter bookmark title"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all pl-12"
              required
            />
            <div className="absolute left-3 top-3 text-gray-400">
              <FiExternalLink className="text-xl" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="url" className="block text-sm font-medium text-gray-300">
            URL
          </label>
          <div className="relative">
            <input
              id="url"
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all pl-12"
              required
            />
            <div className="absolute left-3 top-3 text-gray-400">
              <FaLink className="text-xl" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-300">
            Tags
          </label>
          <div className="relative">
            <input
              id="tags"
              value={tags}
              onChange={e => setTags(e.target.value)}
              placeholder="work, research, tutorial (comma separated)"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all pl-12"
            />
            <div className="absolute left-3 top-3 text-gray-400">
              <FaTag className="text-xl" />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          {editData && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center"
          >
            {editData ? (
              <>
                <FaEdit className="mr-2" />
                Update Bookmark
              </>
            ) : (
              <>
                <FaSave className="mr-2" />
                Save Bookmark
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
