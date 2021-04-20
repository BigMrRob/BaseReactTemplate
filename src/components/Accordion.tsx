import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export interface Props {
  expand: boolean;
  children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({ expand, children }) => {
  const divVariants = {
    expanded: {
      height: "auto",
      width: "100%",
      transition: {
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    collapsed: {
      height: 0,
      width: "100%",
      transition: {
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const tagVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };
  return (
    <motion.div layout variants={divVariants} animate={expand ? "expanded" : "collapsed"} initial={false}>
      <AnimatePresence>
        <motion.div
          layout
          variants={tagVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
