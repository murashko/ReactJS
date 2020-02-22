import React, { Component } from 'react';

class Ninjas extends Component {
	render() {
		const { ninjas } = this.props;
		const ninjaList = ninjas.map(ninja => {
			const { name, age, belt, id } = ninja;
			return (
				<div className="ninja" key={ id }>
					<div>Name: { name }</div>
					<div>Age: { age }</div>
					<div>Belt: { belt }</div>
				</div>
			);
		});

		return (
			<div className="ninja-list">
				{ ninjaList }
			</div>
		);
	}
}

export default Ninjas;