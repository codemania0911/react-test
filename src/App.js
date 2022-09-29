import { createGlobalStyle, StyleSheetManager } from "styled-components";
import { Categories } from "./components/categories";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
		font-family: 'Nunito', sans-serif;
    background-color: #fff;
  }
	input {
		font-family: 'Nunito', sans-serif;
	}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<StyleSheetManager disableVendorPrefixes>
				<>
					<Header />
					<Categories />
					<Main />
					<Footer />
				</>
			</StyleSheetManager>
		</>
	);
}

export default App;
