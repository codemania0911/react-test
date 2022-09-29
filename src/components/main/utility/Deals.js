import styled from "styled-components";
import { Container } from "../../core/Container";

const S = {
	Container: styled(Container)`
		margin-top: 10px;
		flex: 1;

		@media (min-width: 768px) {
			margin: 0;
		}
	`,

	BannerImage: styled.img`
		width: 100%;
		height: 100%;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	`,
};

export const Deals = () => {
	return (
		<S.Container>
			<S.BannerImage src="/assets/panel/deal.png" />
		</S.Container>
	);
};
