import React, { PropTypes } from 'react';

const Button = ({ color, handleClick }) => (
  <button
    className={`button button--${color}`}
    type="button"
    onClick={handleClick}
  />
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
