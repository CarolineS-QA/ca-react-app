import React from 'react';
import PropTypes from 'prop-types';

// 1. all props... depends on the prop size - use props.propName
// 2. replace props with ({propName1, propName2}) - use just name

 const ComponentWithProps = props => {
     // 3. add a const {propName, probName2} = props; here - just use name

    // if passing props into the body here and creating JSX expressions, they need keys
    // <p key={seqNum}>something something something</p>
    


     //Passing a prop with dot notation and {}
      return (
         <div>
             <h1>{props.aStringProp}</h1>
         </div>
     )
 }

ComponentWithProps.defaultProps = {
aStringProp: "default string prop",
aNumberProp: 9001
}

// values that do not have assigned default values will fail silently... 
// (if not supplied)

// Some devs say this negates the need for TypeScript
ComponentWithProps.propTypes = {
     propName: PropTypes.string,
     propName2: PropTypes.func,
     propName3: PropTypes.objectName({
     key1: PropTypes.string,
     key2: PropTypes.number
//   key3: PropTypes.type
     })
}

 export default ComponentWithProps;