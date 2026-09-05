import React, { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Card } from './components/Card';

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Адаптивний дизайн', description: 'Компоненти повністю адаптовані під мобільні та десктопні пристрої.' },
    { id: 2, title: 'Tailwind CSS', description: 'Стилізація виконана за допомогою утилітарних класів Tailwind.' }
  ]);

  const handleAddCard = (newCard) => {
    setCards((prev) => [newCard, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header title="React + Tailwind CSS App" />
      <main className="max-w-4xl mx-auto px-4 pb-12">
        <Form onAddCard={handleAddCard} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} description={card.description} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
