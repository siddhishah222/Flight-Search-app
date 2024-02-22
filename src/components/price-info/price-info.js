import React from 'react';
import './price-info.css';

export const PriceInfo = (props) => {
  return (
    <div className="price-info">
      <p>&#x20b9; {props.amount}</p>
    </div>
  );
}