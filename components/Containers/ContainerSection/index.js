import React, { useEffect } from "react";
import ownStyles from "./ContainerSection.module.css";
import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";

export default function index({
  children,
  className = "",
  backgroundColor,
  first = false,
  id
}) {
  // Our custom easing
  let easing = [0.6, -0.05, 0.01, 0.99];

  // animate: defines animation
  // initial: defines initial state of animation or stating point.
  // exit: defines animation when component exits

  // Custom variant
  const fadeInUp = !first
    ? {
        hidden: {
          opacity: 0,
          y: 500,
          transition: { duration: 1, ease: easing },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: easing,
          },
        },
      }
    : {
        hidden: {
          opacity: 0,
          transition: { duration: 1, ease: easing },
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
            ease: easing,
          },
        },
      };

  const controls = useAnimation();

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id={id} style={{ backgroundColor: backgroundColor }} ref={observe}>
      <motion.div
        animate={controls}
        initial={"hidden"}
        variants={fadeInUp}
        className={`${ownStyles["container-section"]} ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
