import React from 'react';
import './body.css';

const Body = (props) => {
    return (
        <body className='body-container'>
              {props.children}
        </body>
    )
}

export default Body
