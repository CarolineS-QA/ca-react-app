import React, { useState } from 'react';

const StateFunction = () => {

    // Note: never directly mutate state!
    // name of state & function to change state
    const [count, setCount] = useState(5); // useState(default value)

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