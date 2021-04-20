/** REACT */
import React, { useEffect } from 'react';
/** COMPONENTS */
import Spacer from './Spacer';
/** TYPES */
import { IToast } from '../types';
/** CONSTANTS */
import { Colors } from '../constants/Colors';
import { toastInfoObj } from '../constants/toastInfoObj';
/** CONTEXT */
import { useToastContext } from '../context/toast-context';
/** VENDORS */
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

/**
 * **List of toasts that appear in the bottom right corner of the screen, acting as alerts**
 *
 * *✖ No props.*
 */

const Toast: React.FC = () => {
  /** DESTRUCTURES */
  const { notifications } = useToastContext();

  return (
    <div className='toast__list-container'>
      <ul className='toast__list'>
        {/* Wrapper for animated lists with items that will be added or removed */}
        <AnimatePresence initial={false}>
          {notifications.map((notification) => (
            <IndividualToast
              key={notification.id}
              notification={notification}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

interface Props {
  /**
   * notification - The object that holds the type, header, and subheader for the toast.
   */
  notification: IToast;
}

/**
 * **Renders an individual toast for the array of toasts**
 *
 * *Takes in a toast object and index*
 * @param notification - The object that holds the type, header, and subheader for the toast.
 */

const IndividualToast: React.FC<Props> = ({ notification }) => {
  /** DESTRUCTURES */
  const { removeNotification } = useToastContext();

  /** After 5 seconds, if the toast is still present on the screen,
   * this will remove the notification. */
  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(notification);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [notification.id, notification, removeNotification]);

  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.3,
      }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
      style={{
        borderLeft: `7px solid ${toastInfoObj[notification.type].color}`,
      }}
      className='toast'
    >
      <div className='toast__icon-container'>
        {toastInfoObj[notification.type].icon}
      </div>
      <div className='toast__text-container'>
        <h2 className='toast__text-container__header'>{notification.header}</h2>
        <Spacer height={5} />
        <h3 className='toast__text-container__subheader'>
          {notification.subheader}
        </h3>
      </div>
      <button
        /** If you click on the "X" on the toast, it will remove the notification. */
        onClick={() => removeNotification(notification)}
        className='toast__close-btn'
        style={{ background: Colors.White }}
      >
        <svg width='13' height='13' viewBox='0 0 23 23'>
          <Path d='M 3 16.5 L 17 2.5' />
          <Path d='M 3 2.5 L 17 16.346' />
        </svg>
      </button>
    </motion.li>
  );
};

/**
 * **Line that makes up the x icon in the toast**
 * @param props - Passing in the 'd' prop
 */
const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke={Colors.Gray.Light}
    strokeLinecap='round'
    {...props}
  />
);

export default Toast;
