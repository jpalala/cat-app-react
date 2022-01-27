import React from 'react'

const apiKey = 'e713ffde-2619-4cc1-a2b2-14b635d6f285'

const Cats = () => {
    const cats = [
     {id: 1, name: 'Alice Cat'},
     {id: 2, name: 'Bob Cat'},
    ];
     return (
    <div>
      {cats.map((cat, index) => (
        <p key={cat.id}>{cat.name}</p>
      ))}
    </div>
  );
}

export default Cats;
