import React from "react";

const Page = () => {
  const logoURL = "https://picsum.photos/100";
  const siteName = "example.com";

  return (
    <>
      <header>
        <div>{siteName}</div>
        <img src={logoURL} alt="logo" />
      </header>
      <footer>подвал</footer>
    </>
  );
};

export default Page;
