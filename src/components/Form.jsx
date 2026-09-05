import React, { useState } from 'react';

export const Form = ({ onAddCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onAddCard({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 mb-8 space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">Додати нову картку</h2>
      <div>
        <label className="block text-slate-300 mb-1 text-sm font-medium">Заголовок</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введіть назву..."
          className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-slate-300 mb-1 text-sm font-medium">Опис</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введіть опис..."
          rows="3"
          className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Створити
      </button>
    </form>
  );
};
