import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { RootState } from "../state/reducers";

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState("");
	const { searchRepositories } = useActions();
	const { data, error, loading } = useTypedSelector((state: RootState) => state.repositories);

	console.log(data, error, loading);

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

			{error && <h3>{error}</h3>}

			{loading && <h3>Loading...</h3>}

			{data && data.map((name) => <div key={name}>{name}</div>)}
		</div>
	);
};

export default RepositoriesList;
