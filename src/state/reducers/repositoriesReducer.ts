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

export const reducer = (state: RepositoriesState = initialState, action: any): RepositoriesState => {
	switch (action.type) {
		case "search_repositories":
			return { loading: true, error: null, data: [] };
		case "search_repositories_success":
			return { loading: false, error: null, data: action.payload };
		case "search_repositories_error":
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};
