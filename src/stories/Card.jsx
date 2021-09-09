import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import '../styles/components/_card.scss';

export const Card = ({ color, primary, backgroundColor, secondary, large, ...props }) => {
    const mode = primary ? 'card--primary' : secondary ? 'card--secondary' :'card--large';
    return (
    <div className={`card ${mode}`}>
        <img className="card-img-top" src="https://via.placeholder.com/160" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Card name</h5>
            <p className="card-text">Lorem ipsum doloret sit amet. </p>
            <Button primary size="small"  label="Go somewhere" />
        </div>
  </div>
  );
};

Card.propTypes = {
    backgroundColor: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    large: PropTypes.bool,
    color: PropTypes.string
};

Card.defaultProps = {
    backgroundColor: null,
    primary: false,
    secondary: false,
    large: false,
    color: null
};
