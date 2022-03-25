import React from "react";
import { Intro, Mint } from "../../components/Products/MintEngine";
const Page = () => (
  <div>
    <Intro />
    <Mint />
    <style jsx global>{`
      body {
        background-color: #571aaa !important;
      }
    `}</style>
  </div>
);

export default Page;
