import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Provider } from "react-redux";
import store from "../store";

import Header from "./layouts/Header";
import Landing from "./layouts/Landing";
import NoMatch from "./layouts/NoMatch";
import ListingList from "./listings/ListingList";
import ListingDetail from "./listings/ListingDetail";

// Define Global Style
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Mitr';
    letter-spacing: .8px;
  }

  h3 {
    font-weight: 400;
    font-size: 1.2rem;
    color: ${props => props.theme.colorWhite};
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Header />
          <Fragment>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/listings" component={ListingList} />
              <Route exact path="/listings/:slug" component={ListingDetail} />
              <Route component={NoMatch} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
