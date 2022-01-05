import { useState } from "react";
import { useActions } from "../state/hooks/useActions";
import { useTypedSelector } from "../state/hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState("");
	const { searchRepositories } = useActions();
	const { loading, error, data } = useTypedSelector((state) => state.repositories);
	console.log(loading, error, data);

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
