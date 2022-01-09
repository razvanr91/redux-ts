interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const initialState: RepositoriesState = {
	loading: false,
	error: null,
	data: [],
};

enum ActionTypes {
	SEARCH_REPOSITORIES = "search_repositories",
	SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
	SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

interface SearchRepositoriesAction {
	type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
	type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}

interface SearchRepositoriesErrorAction {
	type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
	payload: string[];
}

type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
	switch (action.type) {
		case ActionTypes.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] };
		case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionTypes.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: null, data: action.payload };
		default:
			return state;
	}
};

export default reducer;
