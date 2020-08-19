// import { useState } & useEffect hooks
import React, { useState, useEffect } from 'react';

const StateFunction = () => {

    // Note: never directly mutate state!
    // name of state & function to change state
    const [count, setCount] = useState(5); // useState(default value)

      // Effect hooks: like componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

    return (
        <>
        <p>The current value of count state is: {count}</p>
        <button onClick={() => setCount(count + 1)}>
            Add 1 to count
            </button>
        </>
    );
};

export default StateFunction;