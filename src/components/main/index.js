import styled from "styled-components";
import { Downloads } from "./downloads";
import { Information } from "./information";
import { Knowledge } from "./knowledge";
import { Markets } from "./markets";
import { Utility } from "./utility";

const S = {
	Main: styled.main`
		background-color: #dddddd;
		padding: 0 20px 30px;
	`,
};

export const Main = () => {
	return (
		<S.Main>
			<Knowledge />
			<Markets />
			<Utility />
			<Information />
			<Downloads />
		</S.Main>
	);
};
