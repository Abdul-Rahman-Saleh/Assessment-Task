import React from 'react';
import './DetailsComponent.css';

const DetailsComponent = (props) => {
  return (
    <div className='details-bdy' style={props.style}>
     {props.children}
    </div>
  )
}

export default DetailsComponent
