import React from 'react';
import { Button } from './Button';
import PropTypes from 'prop-types';
import '../styles/components/_banner.scss';

export const Banner = ({ color, primary, backgroundColor, onClick, ...props }) => {
  return (
    <div className="mt-5" style={backgroundColor && { backgroundColor }}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <Button primary size="small" label="Learn more" onClick={onClick} color={color}/>
          </div>
        </div>
      </div>
    </div>
    );
  };

  Banner.propTypes = {
    backgroundColor: PropTypes.string,
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string
  };
  
  Banner.defaultProps = {
    backgroundColor: null,
    primary: false,
    onClick: undefined,
    color: null
  };
  