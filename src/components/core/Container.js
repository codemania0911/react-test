import styled from "styled-components";

const S = {
	Container: styled.div`
		margin-bottom: 30px;
	`,
};

export const Container = (props) => {
	return (
		<S.Container className={props.className}>{props.children}</S.Container>
	);
};
