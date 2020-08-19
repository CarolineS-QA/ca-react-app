import React from 'react';
import AnotherComponent from './AnotherComponent';
import MyClassComponent from './MyClassComponent';
import ComponentWithProps from './ComponentWithProps';

const TopComponent = () => {
    
    const anObject = {
        key1: 'this is an object',
        key2: 2,
        key3: ['array', 'of', 'strings'],
        desc: "props can be numbers, arrays, functions as long as it's defined"
    }

    return (
        <React.Fragment>
        <h1>Hello World</h1>
        <AnotherComponent />
        <MyClassComponent />

        <ComponentWithProps
        aStringProp="this is a prop"
        aNumberProp={100}
        objectProp={anObject}
        />

        </React.Fragment>
        );
};

export default TopComponent;