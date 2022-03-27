import React from "react";
import {
  Intro,
  Mint,
  Composable,
  OperateSystem,
  Contact,
} from "../../components/Products/NftAnalysis";

const Page = () => (
  <div>
    <Intro />
    <Mint />
    <Composable />
    <OperateSystem />
    <Contact />
    <style jsx global>{`
      body {
        background-color: #08091b !important;
      }
    `}</style>
  </div>
);

export default Page;
