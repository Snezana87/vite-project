import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_header.scss';

export const Footer = (props) => (
  <footer>
    <div className="wrapper bg-green-100">
        <div className="container">
            <div className="grid grid-cols-1">
                <ul className="flex justify-center">
                    <li className="mr-5">
                        Item 1
                    </li>
                    <li className="mr-5">
                        Item 2
                    </li>
                    <li className="mr-5">
                        Item 3
                    </li>
                    <li className="mr-5">
                        Item 4
                    </li>
                    <li className="mr-5">
                        Item 5
                    </li>
                    <li className="mr-5">
                        Item 6
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </footer>
);
Footer.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
  };
  
  Footer.defaultProps = {
    user: null,
  };