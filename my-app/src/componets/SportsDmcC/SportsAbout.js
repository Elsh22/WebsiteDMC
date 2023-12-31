import * as React from "react";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer} from "../Motion/motion";
import styles from '../Motion/styles'
import './SportMain.css'
import { TypingText } from '../Motion/TypingText'


function SportsAbout() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title=" | About Dmc Sports |" textStyles="text-center"/>

            <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
            >
            Developing Men of Color (DMC) aims to support the growth and development of  young men of color  through sports. With a focus on Basketball, Soccer, and Dodgeball, DMC provides a safe and inclusive environment for young men to learn, grow, and build relationships through athletic competition. The organization's mission is to empower young men with the skills and confidence to succeed both on and off the field, and to help them become positive role models in their communities. With its commitment to excellence and dedication to the well-being of its participants, DMC is making a lasting impact on the lives of young men of color.
            </motion.p>
        </motion.div>
    </section>
  )
}

export default SportsAbout
