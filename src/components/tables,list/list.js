import React from 'react';

export default function ShoppingList() {
  const items = ['Milk', 'Bread', 'Eggs', 'Butter'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


