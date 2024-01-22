import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <div style={{ paddingInline: "20px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
