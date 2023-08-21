import { motion } from 'framer-motion';

import styles from './styles';
import { fadeIn } from './motion';
import './SportsExplore.css'

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id
        ? 'flex-col lg:flex-[10] flex-[3.5]'
        : 'flex-col lg:flex-[2] flex-[0.5]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <div className="imgers"> {/* Added wrapper */}
      <img
        src={imgUrl}
        alt="planet-04"
        className="imagers" // Updated styles here
      />
    </div>
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Fill out Contact Form Below If Interested In Any Of Sports. Click <a href="https://forms.gle/4TN2VrWtbaKo24y47" target="_blank" rel="noopener noreferrer">here</a>.
        </p>

        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
