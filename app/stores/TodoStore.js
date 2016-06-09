'use strict';

import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import objAssign from 'react/lib/Object.assign';

const CHANGE_EVENT = 'change';

let _store = {
	list: []
};

//Setters method to _store
let _addItem = item => {
	_store.list.push(item);
};

let _removeItem = index => {
	_store.list.splice(index, 1);
};

class TodoStore extends EventEmitter {

	addListener(cb) {
		this.on(CHANGE_EVENT, cb);
	}

	removeListener(cb) {
		this.remove(CHANGE_EVENT, cb);
	}

	getList() {
		return _store.list;
	}
}

var todoStore = new TodoStore();

AppDispatcher.register(payload => {
	let { action } = payload;

	switch (action.actionType) {
		case AppConstants.ADD_ITEM:
			_addItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.REMOVE_ITEM:
			_removeItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;

		default:
			return true;
	}
});

export default todoStore;