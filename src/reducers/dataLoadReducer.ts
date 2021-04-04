import { ActionType } from '../actions/types';

interface InitialStateTypes {
	loading: boolean;
	data: [];
	error: string;
	pagesCount: number;
	currentPage: number;
}

const initialState: InitialStateTypes = {
	loading: false,
	data: [],
	error: '',
	pagesCount: 0,
	currentPage: 1,
};

const dataLoadingReducer = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ActionType.SET_DATA_LOADING_STATUS:
			return Object.assign({}, state, {
				loading: action.payload,
			});
		case ActionType.SET_DATA:
			return Object.assign({}, state, {
				data: action.payload,
			});
		case ActionType.SET_LOADING_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});
		case ActionType.SET_PAGES_COUNT:
			return Object.assign({}, state, {
				pagesCount: +action.payload,
			});
		case ActionType.SET_CURRENT_PAGE:
			return Object.assign({}, state, {
				currentPage: +action.payload,
			});
		default:
			return state;
	}
};

export default dataLoadingReducer;
