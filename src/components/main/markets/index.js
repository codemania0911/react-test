import styled from "styled-components";
import { Container } from "../../core/Container";

const S = {
	Container: styled(Container)`
		display: none;

		@media (min-width: 768px) {
			display: block;
		}
	`,

	Title: styled.h2`
		text-align: center;
		padding-top: 40px;
		padding-bottom: 30px;
	`,

	Markets: styled.div`
		display: grid;
		gap: 30px;
		grid-template-columns: repeat(3, 1fr);

		@media (min-width: 1024px) {
			grid-template-columns: repeat(6, 1fr);
		}
	`,

	Market: styled.div`
		background-color: #fff;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	`,

	MarketImage: styled.img`
		width: 100%;
	`,

	MarketTitle: styled.h3`
		padding: 30px 0;
		text-align: center;
		min-width: 50px;
	`,
};

export const Markets = () => {
	const markets = [
		{ title: "DataComm", image: "/assets/img/datacomm.png" },
		{ title: "HVAC", image: "/assets/img/hvac.png" },
		{ title: "Industrial", image: "/assets/img/industrial.png" },
		{ title: "Lighting", image: "/assets/img/lighting.png" },
		{ title: "Energy Efficiency", image: "/assets/img/energy.png" },
		{ title: "Utility", image: "/assets/img/utility.png" },
	];

	return (
		<S.Container>
			<S.Title>Product Markets</S.Title>

			<S.Markets>
				{markets.map((market, i) => (
					<S.Market key={i}>
						<S.MarketImage src={market.image} />
						<S.MarketTitle>{market.title}</S.MarketTitle>
					</S.Market>
				))}
			</S.Markets>
		</S.Container>
	);
};
