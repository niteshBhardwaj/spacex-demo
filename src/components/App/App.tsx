import { ThemeProvider } from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/client";
import CssBaseline from '@material-ui/core/CssBaseline';
import client from "../../config/graphql/client";
import theme from "../../config/theme";
import Header from "../common/Header/Header";
import Launches from "../features/Launches";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Header />
          <Launches />
        </ApolloProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
