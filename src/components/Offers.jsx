import React from 'react';

const Offers = () => {
  const offersDiv = [<div>Hello</div>, <div>World</div>];

  return (
    <div>
      <h2>Offers</h2>
      <p>Promotions, deals, and special offers for you</p>
      <div>
        {offersDiv.map((ele) => (
          <div>{ele}</div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
