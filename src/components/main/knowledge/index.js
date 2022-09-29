import styled from "styled-components";

const S = {
	Container: styled.div`
		padding: 35px 15px;
		display: flex;
		justify-content: space-between;

		@media (min-width: 768px) {
			display: none;
		}
	`,

	Knowledge: styled.div`
		border-radius: 50%;
		background-color: #fff;
		width: 100px;
		height: 100px;
		position: relative;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	`,

	KnowledgeImage: styled.img`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`,

	Title: styled.p`
		margin-top: 12px;
		font-size: 20px;
		text-align: center;
	`,
};

export const Knowledge = () => {
	const knowledges = [
		{ title: "Categories", icon: "/assets/icons/green/ic_line_style.png" },
		{ title: "Search", icon: "/assets/icons/green/ic_search.png" },
		{ title: "Scan", icon: "/assets/icons/green/ic_scanner.png" },
	];
	return (
		<S.Container>
			{knowledges.map((knowledge, i) => (
				<div key={i}>
					<S.Knowledge>
						<S.KnowledgeImage src={knowledge.icon} />
					</S.Knowledge>
					<S.Title>{knowledge.title}</S.Title>
				</div>
			))}
		</S.Container>
	);
};
