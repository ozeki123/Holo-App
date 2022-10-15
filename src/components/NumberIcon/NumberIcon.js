import React from 'react';
import './NumberIcon.scss';

export const NumberIcon = (props) => {
  return (
    <div className="number-icon">
      <p>{props.number}</p>
    </div>
  )
}
