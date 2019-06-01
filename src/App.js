import React from "react";
import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";
import CardContainer from "./CardContainer";

function App() {
  return (
    <div className="App">
      <Header title="App">
        <nav
          className="navbar is-link"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h1>Simple Card Flip</h1>
            </a>
          </div>
        </nav>
      </Header>
      <CardContainer />
      <Footer isAppFooter={true}>
        <div className="content has-text-centered">
          <p>Footer</p>
        </div>
      </Footer>
    </div>
  );
}

export default App;
