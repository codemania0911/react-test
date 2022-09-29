import styled from "styled-components";
import { Container } from "../../core/Container";

const S = {
	Wrapper: styled(Container)`
		flex: 1;

		@media (min-width: 768px) {
			margin: 0;
		}
	`,

	Container: styled.div`
		padding: 30px 20px 40px 20px;
		background-color: #fff;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	`,

	FlexContainer: styled.div`
		display: flex;
		justify-content: space-between;
		gap: 30px;
	`,

	TitleContainer: styled.div`
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
	`,

	Title: styled.h3``,

	ViewAll: styled.button`
		outline: none;
		border: none;
		background-color: transparent;
		color: #0d920d;
		cursor: pointer;
		font-size: 20px;
		font-weight: bold;
	`,

	Image: styled.img`
		width: 100%;
	`,
};

export const RecentlyViewed = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.TitleContainer>
					<S.Title>Recently Viewed</S.Title>
					<S.ViewAll>View all</S.ViewAll>
				</S.TitleContainer>

				<S.FlexContainer>
					<S.Image src="/assets/recent/11.png" />
					<S.Image src="/assets/recent/22.png" />
					<S.Image src="/assets/recent/22.png" />
				</S.FlexContainer>
			</S.Container>
		</S.Wrapper>
	);
};
