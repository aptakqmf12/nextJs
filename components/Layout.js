import React from "react";
import Nav from "./Nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>next example</title>
        <meta keyword="my blog lol" />
        <meta content="my lol" />
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
