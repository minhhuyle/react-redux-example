import React from 'react';
import Button from './button';

const Counter = ({ counter, increment, decrement }) => (
  <div className="flex">
    <div className="flex-auto flex-center center">
      <Button
        style={ styles.squareButton }
        className="btn btn-primary bg-black"
        onClick={ decrement }>
        -
      </Button>
    </div>

    <div className="flex-auto flex-center center h1">
      { counter }
    </div>

    <div className="flex-auto flex-center center">
      <Button
        style={ styles.squareButton }
        className="btn btn-primary"
        onClick={ increment }>
        +
      </Button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
};

const styles = {
  squareButton: {
    width: 48,
    height: 48,
  },
};

export default Counter;