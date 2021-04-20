/** CONSTANTS */
import { Colors } from '.';
/** VENDORS */
import { FaCheckCircle } from 'react-icons/fa';
import { BsXCircleFill, BsInfoCircleFill } from 'react-icons/bs';
import { TiWarning } from 'react-icons/ti';
import React from 'react';

/**
 * **This is an object with values corresponding to types of notifications**
 *
 * *Each object holds the background color for the toast and the icon to use.
 */
export const toastInfoObj = {
  /** ✅ SUCCESS */
  Success: {
    color: Colors.Green.Primary,
    icon: (
      <FaCheckCircle
        color={Colors.Green.Primary}
        className='individual-toast__icon'
      />
    ),
  },
  /** ❌ ERROR */
  Error: {
    color: Colors.Red.Primary,
    icon: (
      <BsXCircleFill
        color={Colors.Red.Primary}
        className='individual-toast__icon'
      />
    ),
  },
  /** ❗ Warning */
  Warning: {
    color: Colors.Yellow.Primary,
    icon: (
      <TiWarning
        color={Colors.Yellow.Primary}
        className='individual-toast__icon'
      />
    ),
  },
  /** ℹ Info */
  Info: {
    color: Colors.Blue.Primary,
    icon: (
      <BsInfoCircleFill
        color={Colors.Blue.Primary}
        className='individual-toast__icon'
      />
    ),
  },
};
