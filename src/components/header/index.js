import styled from "styled-components";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";

const S = {
	Header: styled.div`
		background-color: #0d920d;
		padding: 20px;

		@media (min-width: 768px) {
			padding: 20px 40px;
		}
	`,
};

export const Header = () => {
	return (
		<S.Header>
			<Navigation />
			<SearchBar />
		</S.Header>
	);
};
