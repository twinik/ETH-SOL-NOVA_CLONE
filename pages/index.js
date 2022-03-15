import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "../components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { Intro } from "../components/Landing";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Intro/>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: poppins;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
