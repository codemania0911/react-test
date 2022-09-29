import styled from "styled-components";

const S = {
	Container: styled.footer`
		background-color: #5e5e5e;
		padding: 40px 30px;
		margin-bottom: 50px;
		text-align: center;
	`,

	Title: styled.h3`
		color: #fff;
		font-size: 23px;
		margin-bottom: 15px;
	`,

	Address: styled.h3`
		color: #fff;
		font-size: 23px;
	`,

	Phone: styled.p`
		margin-top: 5px;
		margin-bottom: 15px;
		color: #fff;
	`,

	Time: styled.h3`
		font-size: 23px;
		text-align: center;
		color: #b1b1b1;
	`,

	LiveHelp: styled.button`
		outline: none;
		border: none;
		padding: 20px 0;
		font-size: 20px;
		min-width: 300px;
		border-radius: 30px;
		cursor: pointer;
		background-color: #fff;
		margin-top: 40px;
		margin-bottom: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 40px auto 60px;
	`,

	ButtonImage: styled.img`
		margin-right: 15px;
	`,

	Contacts: styled.div`
		display: flex;
		justify-content: space-between;
		@media (min-width: 768px) {
			max-width: 1024px;
			margin: auto;
		}
	`,

	Contact: styled.h3`
		color: #fff;
		font-size: 19px;
		cursor: pointer;
	`,
};

export const Footer = () => {
	return (
		<S.Container>
			<S.Title>Support Center</S.Title>
			<S.Address>800-25-Platt</S.Address>
			<S.Phone>800-257-5288</S.Phone>
			<S.Time>4 a.m. - 12 a.m. (pst)</S.Time>
			<S.Time>7 Days a week</S.Time>
			<S.LiveHelp>
				<S.ButtonImage src="/assets/icons/black/ic_comment.png" />
				Live Help
			</S.LiveHelp>
			<S.Contacts>
				<S.Contact>Contact Us</S.Contact>
				<S.Contact>What's New</S.Contact>
				<S.Contact>FAQ's</S.Contact>
			</S.Contacts>
		</S.Container>
	);
};
