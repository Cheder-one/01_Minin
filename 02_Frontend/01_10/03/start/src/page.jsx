import React from "react";
import Navbar from "./navbar";

const Page = () => {
  const logoURL = "https://picsum.photos/110";
  const siteName = "example.com";

  return (
    <>
      <header>
        <div>{siteName}</div>
        <img src={logoURL} alt="logo" />
      </header>
      <Navbar />
      <footer>подвал</footer>
    </>
  );
};

export default Page;
