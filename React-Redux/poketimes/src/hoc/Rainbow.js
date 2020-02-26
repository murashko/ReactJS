import React from 'react';

const Rainbow = (WrapppedComponent) => {
	const colours = ['red', 'pink', 'orange', 'blur', 'green', 'yellow'];
	const randomColour = colours[Math.floor(Math.random() * 5)];
	const className = randomColour + '-text';
	return (props) => {
		return (
			<div className={className}>
				<WrapppedComponent {...props}/>
			</div>
		);
	}
}

export default Rainbow;