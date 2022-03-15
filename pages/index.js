import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
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
