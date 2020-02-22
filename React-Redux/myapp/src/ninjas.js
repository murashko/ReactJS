import React from 'react';

const Ninjas = ({ninjas}) => {
	const ninjaList = ninjas.map(ninja => {
		const { name, age, belt, id } = ninja;
		return age > 20 ? (
			<div className="ninja" key={ id }>
				<div>Name: { name }</div>
				<div>Age: { age }</div>
				<div>Belt: { belt }</div>
			</div>
		) : null;
	});

	return (
		<div className="ninja-list">
			{ ninjaList }
		</div>
	);
};

export default Ninjas;