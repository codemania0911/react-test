import styled from "styled-components";

const S = {
	Navigation: styled.div`
		display: flex;
		justify-content: space-between;
	`,

	Logo: styled.img``,

	NavActions: styled.div`
		display: flex;
		gap: 25px;
	`,

	NavIcon: styled.img`
		object-fit: contain;
		cursor: pointer;
	`,
};

export const Navigation = () => {
	return (
		<S.Navigation>
			<S.Logo src="/assets/logo.png" />
			<S.NavActions>
				<S.NavIcon src="/assets/icons/white/ic_search.png" />
				<S.NavIcon src="/assets/icons/white/ic_shopping_cart.png" />
				<S.NavIcon src="/assets/icons/white/ic_person.png" />
				<S.NavIcon src="/assets/icons/white/ic_menu.png" />
			</S.NavActions>
		</S.Navigation>
	);
};
