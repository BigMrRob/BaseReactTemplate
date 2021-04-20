/** REACT */
import React from 'react';
/** CONSTANTS */
import { hoverTapTransformBoxShadowObj } from '../constants';
/** VENDORS */
import { motion } from 'framer-motion';

interface Props {
  /**
   * label - Button text.
   */
  label: string;
  /**
   * clickHandler - Callback for the onClick event for the button
   */
  clickHandler:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  /**
   * bcgColor - Color of the background of the button. Defaults to color-blue-primary.
   */
  bcgColor?: string;
  /**
   * hoverBcgColor - Color of the background of the button on hover. Defaults to color-blue-dark.
   */
  hoverBcgColor?: string;

  classes?: string;
}

/**
 * **Base button component**
 *
 * *Takes in a label for the button and a click handler*
 *
 * @param label - Button text
 * @param clickHandler - Callback for the onClick event for the button
 * @param bcgColor - Color of the background of the button. If not provided, will default to color-blue-primary.
 * @param hoverBcgColor - Color of the background of the button on hover. if not provided, will default to color-blue-dark.
 * to primary blue color.
 */

const Button: React.FC<Props> = ({
  label,
  clickHandler,
  //   bcgColor = Colors.Blue.Primary,
  //   hoverBcgColor = Colors.Blue.Dark,
  classes,
}) => {
  /** Good example of using Framer Motion for a simple animation. */
  return (
    <motion.button
      className={classes}
      //   style={{ backgroundColor: bcgColor }}
      whileHover={{
        // backgroundColor: hoverBcgColor,
        ...hoverTapTransformBoxShadowObj.hover,
      }}
      whileTap={hoverTapTransformBoxShadowObj.tap}
      onClick={clickHandler}
    >
      <p className='paragraph'>{label}</p>
    </motion.button>
  );
};

export default Button;
