import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
	const ninjaList = ninjas.map(ninja => {
		const { name, age, belt, id } = ninja;
		return age > 0 ? (
			<div className="ninja" key={ id }>
				<div>Name: { name }</div>
				<div>Age: { age }</div>
				<div>Belt: { belt }</div>
				<button onClick={ () => deleteNinja(id) }>Delete ninja</button>
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