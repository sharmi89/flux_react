'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
import AddItem from './AddItem';
import TodoList from './TodoList';

export default class TodoContainer extends React.Component {
	
	constructor() {
		super();

		this.state = {
			list: TodoStore.getList()
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({
			list: TodoStore.getList()
		});
	}

	componentDidMount() {
		//Register the listener
		TodoStore.addListener(this._onChange);
	}

	componentDidUnMount() {
		//Remove the listener
		TodoStore.removeListener(this._onChange);
	}

	handleAddItem(item) {
		TodoActions.addItem(item);
	}

	handleRemoveItem(index) {
		TodoActions.removeItem(index);
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-lg-offset-3'>
						<h3 className='text-center'>Todo List</h3>
						<AddItem add={this.handleAddItem} />
						<TodoList items={this.state.list} remove={this.handleRemoveItem} />
					</div>
				</div>
			</div>
		);
	}
}