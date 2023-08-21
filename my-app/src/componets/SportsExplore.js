import * as React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "./motion";
import { useState } from "react";
import { TypingText, TitleText } from "./TypingText";
import ExploreCard from "./SportsCard";
import { exploreWorlds } from "./SportsID";
import "./SportsExplore.css";

function SportsExplore() {
  const [active, setActive] = useState("world-2");

  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title=" | The Sports |" textStyles="text-center" />
        <TitleText
          title={
            <h2>
              Choose The Sport <br className="md:block hidden" /> You Wish To
              Know More About
            </h2>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SportsExplore;
