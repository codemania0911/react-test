import styled from "styled-components";

const S = {
	Container: styled.div`
		padding: 0 5px;

		@media (min-width: 768px) {
			padding: 0;
		}
	`,

	Header: styled.div`
		padding: 30px 30px 30px 25px;
		display: flex;
		justify-content: space-between;

		@media (min-width: 768px) {
			justify-content: center;
		}
	`,

	TitleBar: styled.div`
		display: flex;
		gap: 15px;
	`,

	TitleIcon: styled.img`
		object-fit: contain;
	`,

	Title: styled.h2``,

	Forward: styled.img`
		object-fit: contain;

		@media (min-width: 768px) {
			display: none;
		}
	`,

	Categories: styled.div`
		padding: 0 3px;

		@media (min-width: 768px) {
			padding: 0;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	`,

	Category: styled.div`
		border-top: 1.5px solid #bcbcbc;
		padding: 18px 27px 18px 25px;
		display: flex;
		justify-content: space-between;

		@media (min-width: 768px) {
			justify-content: center;

			&:not(:nth-child(3n)) {
				border-right: 1.5px solid #bcbcbc;
			}

			&:nth-child(4),
			&:nth-child(5),
			&:nth-child(6) {
				border-bottom: 1.5px solid #bcbcbc;
			}
		}
	`,

	CategoryTitle: styled.p`
		font-size: 20px;
	`,
};

export const Categories = () => {
	const categories = [
		{
			title: "My Catalog",
			icon: "/assets/icons/black/ic_playlist_add_check.png",
		},
		{ title: "My List", icon: "/assets/icons/black/ic_list.png" },
		{ title: "Live Help", icon: "/assets/icons/green/ic_chat - active.png" },
		{ title: "PIM", icon: "/assets/icons/black/ic_check_circle.png" },
		{ title: "Account", icon: "/assets/icons/black/ic_comment.png" },
		{ title: "Branch Locations", icon: "/assets/icons/black/ic_place.png" },
	];

	return (
		<S.Container>
			<S.Header>
				<S.TitleBar>
					<S.TitleIcon src="/assets/icons/black/ic_categories.png" />
					<S.Title>Shop all categories</S.Title>
				</S.TitleBar>

				<S.Forward src="/assets/icons/black/ic_arrow_forward.png" />
			</S.Header>

			<S.Categories>
				{categories.map((category, i) => (
					<S.Category key={i}>
						<S.TitleBar>
							<S.TitleIcon src={category.icon} />
							<S.CategoryTitle>{category.title}</S.CategoryTitle>
						</S.TitleBar>
						<S.Forward src="/assets/icons/black/ic_arrow_forward.png" />
					</S.Category>
				))}
			</S.Categories>
		</S.Container>
	);
};
