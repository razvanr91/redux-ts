import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RootState } from "../state/reducers";

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState("");
	const { searchRepositories } = useActions();
	const { error, data, loading } = useTypedSelector((state: RootState) => state.repositories);

	console.log(error, data, loading);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		searchRepositories(term);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
};

export default RepositoriesList;
