import React from "react";
import {
  Intro,
  NotBots,
  PreMint,
  MintGating,
  OperateSystem,
  Contact,
} from "../../components/Products/BotProtection";

const Page = () => (
  <div>
    <Intro />
    <NotBots />
    <PreMint />
    <MintGating />
    <OperateSystem />
    <Contact />
    <style jsx global>{`
      body {
        background-color: #1f39c3 !important;
      }
    `}</style>
  </div>
);

export default Page;
