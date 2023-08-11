import { motion } from 'framer-motion';

import styles from './styles';
import { startingFeatures } from './SportsID';
import { StartSteps, TitleText, TypingText } from './TypingText';
import { staggerContainer, fadeIn, planetVariants } from './motion';
import Started from '../../newassest/sports.jpg'
import './SportsSteps.css';

const SportsSteps = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={Started}
          alt="get-started"
          className="wall"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Joining a team Works |" />
        <TitleText title={<>Curious on joining a team</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={` ${index + 1}.`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default SportsSteps;
