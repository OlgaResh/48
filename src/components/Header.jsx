import React from 'react';

export const Header = ({ title }) => {
  return (
    <header className="bg-slate-900 text-white py-6 px-4 shadow-lg mb-8">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
        <span className="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">
          Tailwind UI
        </span>
      </div>
    </header>
  );
};
