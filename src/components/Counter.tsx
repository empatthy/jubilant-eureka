import { useState } from 'react';
import * as classes from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <div>{counter}</div>
      <button className={classes.btn} onClick={() => setCounter(counter + 1)}>
        increment
      </button>
    </div>
  );
};
