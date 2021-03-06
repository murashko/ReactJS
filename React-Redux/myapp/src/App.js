import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './App.css';

class App extends React.Component {
	state = {
		ninjas: [
			{ name: 'Ryu', age: 30, belt: 'black', id: 1 },
			{ name: 'Yoshi', age: 20, belt: 'green', id: 2 },
			{ name: 'Crystal', age: 25, belt: 'pink', id: 3 }
		]
	}

	addNinja = (ninja) => {
		ninja.id = Math.random();
		const ninjas = [...this.state.ninjas, ninja];
		this.setState({
			ninjas: ninjas
		});
	}

	deleteNinja = (id) => {
		const ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
		this.setState({
			ninjas: ninjas
		});
	}

	componentDidMount() {
		console.log('component mounted');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('component updated');
		console.log(prevProps, prevState);
	}

	render() {
		return (
			<div className="app">
				<h1>My React app!</h1>
				<p>Wellcome :)</p>
				<Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
				<AddNinja addNinja={ this.addNinja }/>
			</div>
		);
	}
}

export default App;
