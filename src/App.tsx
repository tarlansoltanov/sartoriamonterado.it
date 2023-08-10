import React from "react";

import { Header, Footer, ScrollToTop } from "src/components";

import { Home } from "src/pages";

function App() {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <Header />
        <Home />
        <Footer />
      </div>

      <ScrollToTop />
    </React.Fragment>
  );
}

export default App;
