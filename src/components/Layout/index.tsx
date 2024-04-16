import React from "react";

// Related Components
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <Header />

        {children}

        <Footer />
      </div>

      <ScrollToTop />
    </React.Fragment>
  );
};

export default Layout;
