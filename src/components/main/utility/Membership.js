import styled from "styled-components";
import { Container } from "../../core/Container";

const S = {
	Container: styled(Container)`
		order: 2;

		@media (min-width: 768px) {
			order: 1;
		}
	`,

	Banner: styled.div`
		flex-shrink: 0;
		background-color: #fff;
		text-align: center;
		padding: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

		@media (min-width: 768px) {
			flex-direction: row;
		}
	`,

	BannerImage: styled.img`
		flex: 1;
		width: 100%;
	`,

	BannerArea: styled.div`
		flex: 1;
	`,

	Title: styled.h1`
		text-align: center;
		margin-top: 20px;
	`,

	Subtitle: styled.h2`
		text-align: center;
		margin-bottom: 35px;
	`,

	PlusTitle: styled.span`
		color: #0d920d;
	`,

	LearnMore: styled.button`
		outline: none;
		border: none;
		padding: 20px 0;
		font-size: 20px;
		min-width: 300px;
		border-radius: 30px;
		cursor: pointer;
	`,
};

export const Membership = () => {
	return (
		<S.Container>
			<S.Banner>
				<S.BannerImage src="/assets/img/platt-plus.png" />
				<S.BannerArea>
					<S.Title>Get Started Today</S.Title>
					<S.Subtitle>
						Become a <S.PlusTitle>Platt Plus</S.PlusTitle> Member.
					</S.Subtitle>
					<S.LearnMore>Learn More</S.LearnMore>
				</S.BannerArea>
			</S.Banner>
		</S.Container>
	);
};
