import React from "react";
import Head from "next/head";

const HeadInfo = ({ title, keyword, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword} />
        <meta content={content} />
      </Head>
    </>
  );
};

HeadInfo.defaultProps = {
  title: "next exmple",
  keyword: "next ex",
  contents: "practice next js",
};

export default HeadInfo;
