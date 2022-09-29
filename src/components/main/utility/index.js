import styled from "styled-components";
import { Deals } from "./Deals";
import { Membership } from "./Membership";
import { RecentlyViewed } from "./RecentlyViewed";

const S = {
	DesktopView: styled.div`
		display: none;
		@media (min-width: 768px) {
			display: flex;
			gap: 30px;
			margin-bottom: 30px;
		}
	`,

	MobileView: styled.div`
		display: block;
		@media (min-width: 768px) {
			display: none;
		}
	`,
};

export const Utility = () => {
	return (
		<>
			<S.MobileView>
				<Deals />
			</S.MobileView>
			<Membership />
			<S.MobileView>
				<RecentlyViewed />
			</S.MobileView>

			<S.DesktopView>
				<Deals />
				<RecentlyViewed />
			</S.DesktopView>
		</>
	);
};
