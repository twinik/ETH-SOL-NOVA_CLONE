import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Styles must use direct files imports
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <AnimatePresence initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: poppins;
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
