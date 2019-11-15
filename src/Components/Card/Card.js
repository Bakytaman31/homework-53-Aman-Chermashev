import React from 'react';
import './Card.css'

const Card = props => {
    return(
        <div key={props.key} className='card'>
            <p>{props.task}</p>
            <span onClick={props.remove}><i className='fas fa-trash'/></span>
        </div>
    );
};

export default Card;