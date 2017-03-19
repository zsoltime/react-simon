import React, { PropTypes } from 'react';

const Button = ({ color, disabled, handleClick }) => (
  <button
    className={`button button--${color}`}
    data-color={color}
    disabled={disabled}
    type="button"
    onClick={() => handleClick(color)}
  />
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
