import React, { PropTypes } from 'react';

const Counter = ({ count }) => (
  <div className="counter">
    {count}
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
