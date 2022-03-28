import React from "react";
import {
  Intro,
  VerifiedDiscord,
  Flexible,
  OperateSystem,
  Contact,
} from "../../components/Products/NovapassVerification";

const Page = () => (
  <div>
    <Intro />
    <VerifiedDiscord />
    <Flexible />
    <OperateSystem />
    <Contact />

    <style jsx global>{`
      body {
        background-color: #000c8e !important;
      }
    `}</style>
  </div>
);

export default Page;
