import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Styles must use direct files imports
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
