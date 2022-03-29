import React from "react";
import {
  Intro,
  DataToEmpower,
  HolderAnalytics,
  OperateSystem,
  Contact,
} from "../../components/Products/NftAnalysis";

const Page = () => (
  <div>
    <Intro />
    <DataToEmpower />
    <HolderAnalytics />
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
