import React from 'react';

export const Card = ({ title, description }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow-md hover:border-slate-600 transition-all">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
