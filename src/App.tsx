import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Footer, ScrollToTop } from "src/components";

import { publicRoutes } from "src/routes";

function App() {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <Header />

        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>

        <Footer />
      </div>

      <ScrollToTop />
    </React.Fragment>
  );
}

export default App;
