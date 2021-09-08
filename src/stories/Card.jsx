import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import '../styles/components/_card.scss';

export const Card = ({ item, name, description, color, primary, backgroundColor, ...props }) => {
    debugger;
    const mode = primary ? 'card--primary' : 'card--secondary';
    console.log(item);
    return (
    <div className={`card ${mode}`}>
        <img className="card-img-top" src="https://via.placeholder.com/160" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <Button primary size="small"  label="Go somewhere" />
        </div>
  </div>
  );
};

Card.propTypes = {
    backgroundColor: PropTypes.string,
    primary: PropTypes.bool,
    color: PropTypes.string
};

Card.defaultProps = {
    backgroundColor: null,
    primary: false,
    color: null
};
