import React from 'react';

// use context to create global variables and functions
// that can be shared with all components

// create a context object
const MyContext = React.createContext({
	count: '',
	setCount: () => {}
});

export default MyContext;
