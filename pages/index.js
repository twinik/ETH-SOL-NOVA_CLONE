import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hola</h1>
      <p>
        Sint veniam officia incididunt voluptate ea consequat. Ad esse velit
        adipisicing nisi in veniam in aliqua velit id cillum in. Non eiusmod id
        non nisi nulla officia do aliqua tempor velit amet ex minim consectetur.
        Labore esse incididunt consectetur et ex laborum eiusmod do magna minim
        pariatur incididunt nisi. Ea incididunt magna tempor exercitation eu
        commodo cupidatat nisi ad nisi commodo exercitation et. Ut eu veniam
        incididunt deserunt duis cupidatat anim Lorem nulla consectetur sint
        dolor pariatur.
      </p>
      <h1>Hola</h1>
      <p>
        Sint veniam officia incididunt voluptate ea consequat. Ad esse velit
        adipisicing nisi in veniam in aliqua velit id cillum in. Non eiusmod id
        non nisi nulla officia do aliqua tempor velit amet ex minim consectetur.
        Labore esse incididunt consectetur et ex laborum eiusmod do magna minim
        pariatur incididunt nisi. Ea incididunt magna tempor exercitation eu
        commodo cupidatat nisi ad nisi commodo exercitation et. Ut eu veniam
        incididunt deserunt duis cupidatat anim Lorem nulla consectetur sint
        dolor pariatur.
      </p>
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
