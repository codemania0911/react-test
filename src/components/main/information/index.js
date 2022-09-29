import styled from "styled-components";
import { Container } from "../../core/Container";

const S = {
	Container: styled.div`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;

		@media (min-width: 768px) {
			grid-template-columns: repeat(4, 1fr);
			gap: 50px;
		}
	`,

	Card: styled.div`
		position: relative;
		padding: 30px;
		text-align: center;
		background-color: #fff;
		min-height: 200px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	`,

	CardImage: styled.img``,

	TitleWrapper: styled.div`
		position: absolute;
		bottom: 20px;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		min-height: 50px;
		width: 100%;
		align-items: center;
	`,

	CardTitle: styled.h3`
		max-width: 180px;
	`,
};

export const Information = () => {
	const informations = [
		{
			title: "Super Tool Day & Dynamic Data Day",
			image: "/assets/img/super-tool-day.png",
		},
		{ title: "Branch Locations", image: "/assets/img/ic_location_b.png" },
		{ title: "Help Center", image: "/assets/img/ic_helpcenter.png" },
		{ title: "Platt University", image: "/assets/img/ic_platt-u.png" },
	];

	return (
		<Container>
			<S.Container>
				{informations.map((information, i) => (
					<S.Card key={i}>
						<S.CardImage src={information.image} />
						<S.TitleWrapper>
							<S.CardTitle>{information.title}</S.CardTitle>
						</S.TitleWrapper>
					</S.Card>
				))}
			</S.Container>
		</Container>
	);
};
