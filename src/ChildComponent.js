import React, { useContext } from 'react';
import MyContext from './MyContext';

import GrandchildComponent from './GrandchildComponent';

const ChildComponent = props => {
	// using the useContext hook & destructuring:
	const { count, setCount } = useContext(MyContext);

	return (
		<div>
			<h2>ChildComponent</h2>
			<button onClick={() => setCount(count + 1)}>Count + 1</button> See Count
			in ChildComponent ({count})
			<br />
			<GrandchildComponent />
		</div>
	);

	/// using the useContext hook withOUT destructuring
	// const myContextObj = useContext(MyContext);

	// return (
	// 	<div>
	// 		<h2>ChildComponent</h2>
	// 		<button onClick={() => myContextObj.setCount(myContextObj.count + 1)}>
	// 			Count + 1
	// 		</button>{' '}
	// 		See Count in ChildComponent ({myContextObj.count})
	// 		<br />
	// 		<GrandchildComponent />
	// 	</div>
	// );
};

export default ChildComponent;
