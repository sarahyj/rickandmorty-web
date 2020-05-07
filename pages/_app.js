import React from "react";
import PropTypes from "prop-types";
import theme from "@/theme";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "@/apollo-client";

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pageProps: PropTypes.object,
};

export default withApollo(App);
