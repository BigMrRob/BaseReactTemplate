import { ToastType } from './enums';

export interface ISelectOption {
  /**
   * value - Number value corresponding to the string value of the select option.
   */
  value: number;
  /**
   * label - String value representing the select option.
   */
  label: string;
}

/**
 * **Individual instance of a toast**
 */
export interface IToast {
  /**
   * type - Defines the type of toast.
   */
  type: ToastType;
  /**
   * header - Main text of the toast.
   */
  header: string;
  /**
   * subheader - Sub text of the toast.
   */
  subheader: string;
  /**
   * id - Incremented number representing the position of the toast in the array.
   */
  id?: number;
}

export interface IToastContext {
  /**
   * notifications - Array of toasts.
   */
  notifications: IToast[];
  /**
   * setNotifications - Setter for array of toasts.
   */
  setNotifications: React.Dispatch<React.SetStateAction<IToast[]>>;
  /**
   * addNotification - Function to add a toast, takes in a notification.
   */
  addNotification: (notification: IToast) => void;
  /**
   * removeNotification - Function to remove a toast, takes in a notification.
   */
  removeNotification: (toast: IToast) => void;
}
