import * as React from "react";
import Basketball from '../newassest/BasketballDunk.mp4'
//import Soccer from '../newassest/Soccer.mp4'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from "./motion";
import styles from './styles'
import './SportMain.css'

function SportsMain() {
  return (
  <div className="container">
  <section className={`${styles.yPaddings} sm:pl-16pl-6`}>
    <motion.div
    variants={staggerContainer}   
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    > 
    <div className="flex justify-center items-center flex-col relative z-10">
    <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
      Welcome to
    </motion.h1>
    <motion.div
    variants={textVariant(1.2)}
    className="flex flex-row justify-center items-center"
    >
    <h1 className={styles.heroHeading}>DMC Sports</h1>
    <div className={styles.heroDText} />
    </motion.div>
    </div>

    <motion.div
    variants={slideIn('right', 'tween', 0.2, 1)}
    className="relative w-full md:-mt-[20px] -mt-[12px]"
    >
      <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
      <video
              src={Basketball}
              width="100%"
              height="100%"
              controls
              className="rounded-tl-[140px]"
              autoPlay='True'
              muted='True'
              playsInline
            />

    </motion.div>
  </motion.div>
  </section>
  </div>
  );
};

export default SportsMain;
