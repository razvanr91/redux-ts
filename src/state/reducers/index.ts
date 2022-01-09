import reducer from "./repositoriesReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	repositories: reducer,
});

export default reducers;
