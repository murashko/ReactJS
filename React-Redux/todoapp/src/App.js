import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: 'buy some milk' },
			{ id: 2, content: 'play mario kart' }
		]
	}

	addTodo = (todo) => {
		const {todos} = this.state;
		todo.id = todos.reduce((first, second) => Math.max(first.id, second.id), 0) + 1;
		const newTodos = [...todos, todo];
		this.setState({
			todos: newTodos
		});
	}

	deleteTodo = (id) => {
		const newTodoList = this.state.todos.filter(todo => todo.id !== id);
		this.setState({
			todos: newTodoList
		});
	}

	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">Todo's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;