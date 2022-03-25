import React from "react";
import { Intro, Mint,Composable,OperateSystem } from "../../components/Products/MintEngine";
const Page = () => (
  <div>
    <Intro />
    <Mint />
    <Composable />
    <OperateSystem/>
    <style jsx global>{`
      body {
        background-color: #571aaa !important;
      }
    `}</style>
  </div>
);

export default Page;
