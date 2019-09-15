import React from 'react';
import MyContext from './MyContext';

const GrandchildComponent = props => {
	return (
		// if you don't want to use the useContext hook you can wrap the child component in MyContext.Consumer:

		<MyContext.Consumer>
			{context => (
				<div>
					<h2>GrandhildComponent</h2>
					<button onClick={() => context.setCount(context.count + 5)}>
						Count + 5
					</button>{' '}
					See Count in GrandchildComponent ({context.count})
				</div>
			)}
		</MyContext.Consumer>
	);
};

export default GrandchildComponent;
