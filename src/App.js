import "./App.css";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import customTheme from "./theme";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${colorMode === "light" ? "white" : "#1a202c"};
          }
        `}
      />
      {children}
    </>
  );
};

function App() {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/test" component={Header} />
              {/* <Main exact path="/projects" component={Projects} /> */}
            </Switch>
          </BrowserRouter>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
