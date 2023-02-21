import React from "react";
import Navbar from "./navbar";

const Page = () => {
  const logoURL = "https://picsum.photos/50";
  const siteName = "example.com";

  return (
    <>
      <header>
        <Navbar />
        <div>{siteName}</div>
        <img src={logoURL} alt="logo" />
      </header>
      <footer>подвал</footer>
    </>
  );
};

export default Page;