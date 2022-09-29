import styled from "styled-components";

const S = {
	Banner: styled.div`
		position: relative;
		background-color: #fff;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	`,

	BannerImage: styled.img`
		width: 100%;
	`,

	BannerTitle: styled.h3`
		padding: 20px 0;
		text-align: center;
	`,
};

export const Downloads = () => {
	return (
		<S.Banner>
			<S.BannerImage src="/assets/panel/app-get-banner.png" />
			<S.BannerTitle>Shop better, download the Platt App today</S.BannerTitle>
		</S.Banner>
	);
};
