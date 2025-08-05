// src/pages/Home.jsx
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import BookmarkForm from '../components/BookmarkForm';
import BookmarkList from '../components/BookmarkList';
import TagFilter from '../components/TagFilter';
import ConfirmDialog from '../components/ConfirmDialog';

export default function Home({ user }) {
  const storageKey = `bookmarks-${user.username}`;
  const [bookmarks, setBookmarks] = useLocalStorage(storageKey, []);
  const [editing, setEditing] = useState(null);
  const [tagFilter, setTagFilter] = useState(null);
  const [toDelete, setToDelete] = useState(null);

  const saveBookmark = (bm) => {
    const updated = bookmarks.some(b => b.id === bm.id)
      ? bookmarks.map(b => b.id === bm.id ? bm : b)
      : [...bookmarks, bm];
    setBookmarks(updated);
    setEditing(null);
  };

  const confirmDelete = () => {
    setBookmarks(bookmarks.filter(b => b.id !== toDelete.id));
    setToDelete(null);
  };

  const allTags = [...new Set(bookmarks.flatMap(b => b.tags))];
  const filtered = tagFilter ? bookmarks.filter(b => b.tags.includes(tagFilter)) : bookmarks;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}!</h1>
      <BookmarkForm onSave={saveBookmark} editData={editing} />
      <TagFilter tags={allTags} active={tagFilter} onSelect={setTagFilter} />
      <BookmarkList bookmarks={filtered} onEdit={setEditing} onDelete={setToDelete} />
      {toDelete && <ConfirmDialog onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />}
    </div>
  );
}
