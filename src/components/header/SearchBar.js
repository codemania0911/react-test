import { useState } from "react";
import styled from "styled-components";

const S = {
	SearchBarContainer: styled.div`
		position: relative;
		padding: 25px 5px 15px;

		@media (min-width: 768px) {
			padding: 20px 0 10px;
		}
	`,

	SearchBar: styled.input`
		height: 50px;
		border-radius: 3px;
		outline: none;
		border: none;
		width: calc(100% - 20px);
		padding-left: 20px;
		font-size: 15px;
	`,

	SearchIcon: styled.img`
		position: absolute;
		right: 15px;
		top: calc(50% - 5px);
	`,

	Autocomplete: styled.ul`
		position: absolute;
		list-style: none;
		width: 100%;
		background-color: #fff;
		border: 1px solid #bcbcbc;
		border-radius: 3px;

		& li {
			height: 35px;
			padding-left: 20px;
			cursor: pointer;
			display: flex;
			align-items: center;
			&:hover {
				background-color: #bcbcbc;
			}
		}
	`,
};

export const SearchBar = () => {
	const [inputValue, setInputValue] = useState("");
	const [timer, setTimer] = useState(null);
	const [items, setItems] = useState([]);

	const fetchResults = async () => {
		if (inputValue) {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/comments?name_like=${inputValue}&_limit=10`
			);
			const data = await response.json();
			setItems(data);
		}
	};

	const inputChanged = (e) => {
		setInputValue(e.target.value);

		clearTimeout(timer);

		const newTimer = setTimeout(() => {
			fetchResults();
		}, 500);

		setTimer(newTimer);
	};

	const clearAutocomplete = (value) => {
		setInputValue(value);
		setItems([]);
	};

	return (
		<S.SearchBarContainer>
			<S.SearchBar
				placeholder="What are you looking for?"
				type="text"
				value={inputValue}
				onChange={inputChanged}
			/>
			<S.SearchIcon src="/assets/icons/black/ic_search.png" />

			{items.length > 0 && (
				<S.Autocomplete>
					{items.map((item, i) => (
						<li key={i} onClick={() => clearAutocomplete(item.name)}>
							{item.name}
						</li>
					))}
				</S.Autocomplete>
			)}
		</S.SearchBarContainer>
	);
};
