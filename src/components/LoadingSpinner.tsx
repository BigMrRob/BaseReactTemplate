/** REACT */
import React from 'react';
/** CONSTANTS */
import { Colors } from '../constants/Colors';
interface Props {
  /**
   * size - Specifies the height and width of the loading spinner, options are xs, sm, md, lg, and xl, defaults to md.
   */
  size?: number;
  /**
   * color - Specifieds the color of the spinner, options are Blue, Red, Purple, Pink, Orange, Yellow, Green, andn Emerald, defaults to Blue.
   */
  color?: string;
  /**
   * containerHeight - Specifies the height of the container, defaults to 100%.
   */
  containerHeight?: string | number | (string & {}) | undefined;
  /**
   * containerWidth - Specifies the width of the container, defaults to 100%.
   */
  containerWidth?: string | number | (string & {}) | undefined;
  /**
   * backgroundColor - Optional rgba() value for background of spinner
   */
  backgroundColor?: string | null;
}
/**
 * **Loading Spinner Component**
 *
 * *Takes in a prop to determine the size of the element.*
 * @param size - Specifies the height and width of the loading spinner, options are xs, sm, md, lg, and xl, defaults to md.
 * @param color - Specifies the color of the spinner, options are Blue, Red, Purple, Pink, Orange, Yellow, Green, andn Emerald, defaults to Blue.
 * @param containerHeight - Specifies the height of the container, defaults to 100%.
 */
const LoadingSpinner: React.FC<Props> = ({
  size = 'md',
  color = '#0005aa1',
  containerHeight = '100%',
  containerWidth = '100%',
  backgroundColor = null,
}) => {
  /** Takes in the size Enum and assigns a number value accordingly. */
  const getSizeInRems = () => {
    switch (size) {
      case 'xs':
        return '2';
        break;
      case 'sm':
        return '3';
        break;
      case 'md':
        return '5';
        break;
      case 'lg':
        return '7';
        break;
      case 'xl':
        return '9';
        break;
      default:
        return '5';
        break;
    }
  };
  return (
    <div
      style={{
        height: 100,
        width: 100,
      }}
      className='loading-spinner__container'
    >
      <div
        style={{
          height: `${getSizeInRems()}rem`,
          width: `${getSizeInRems()}rem`,
          borderColor: '#eff1f2',
          borderTopColor: '#005aa1',
        }}
        className='loading-spinner'
      />
    </div>
  );
};
export default LoadingSpinner;
