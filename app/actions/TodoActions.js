'use strict';

import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class TodoActions {

	addItem(item) {
		AppDispatcher.handleAction({
			actionType: AppConstants.ADD_ITEM,
			data: item
		});
	}

	removeItem(index) {
		AppDispatcher.handleAction({
			actionType: AppConstants.REMOVE_ITEM,
			data: index
		});
	}
}

export default new TodoActions();