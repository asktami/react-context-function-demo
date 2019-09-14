import React, { useState } from 'react';
import './App.css';

import MyContext from './MyContext';

import ChildComponent from './ChildComponent';

function App() {
	// in this example, App = my Provider - where I define state
	// Provider = holds and provides state

	// setting default state 'count' variable value, using hooks
	// setCount is the updater function to change the state 'count' variable value
	const [count, setCount] = useState(0);

	/*
	from https://reactjs.org/docs/context.html:

		Context.Provider

		 Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes

		 Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

		 All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component bails out of the update.
		*/

	// create a component state object to update the values stored in MyContext
	// pass in any variables and functions you want access to in child components (aka Consumers)
	// pass in both the state variables AND the functions which change them
	const componentStateObj = {
		count: count,
		setCount: setCount
	};

	return (
		// use Provider to pass this component state as a context value down to the entire component tree
		<MyContext.Provider value={componentStateObj}>
			<main className="App">
				<h1>
					React Context Demo
					<br />
					with Functional Components and Hooks
				</h1>
				<p>To use context you need:</p>
				<ul>
					<li>a state object (in a provider)</li>
					<li>a way to change your state object from your consumer(s)</li>
					<li>a way to communicate state changes to your provider</li>
				</ul>

				<div>The count (in state) is {count}</div>
				<ChildComponent />
			</main>
		</MyContext.Provider>
	);
}

export default App;
