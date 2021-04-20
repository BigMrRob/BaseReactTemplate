/** REACT */
import React, { useState, createContext, useContext, useCallback } from "react";
/** TYPES */
import { IToast, IToastContext } from "../types";

/**
 * Create the ToastContext with the type of IMainContext
 */
export const ToastContext = createContext<IToastContext>({} as IToastContext);

/**
 * **Initialize the id to be a value of 1.**
 *
 * *This will be incremented every time a notification is added.*
 */
let id = 1;

/**
 * Create the Provider wrapper for context.
 * This is where you will define all instances of state or functions to be passed to context.
 */
const ToastContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  /** STATE */
  const [notifications, setNotifications] = useState<IToast[]>([]);

  /**
   * **Function to add a new notification to the notifications array.**
   */
  const addNotification = useCallback(
    /** Take in a notification object of type IToast. */
    (notification: IToast) => {
      /** Add a notification to the end of the notifications
       *  array with the id incremented to be one more than the last. */
      setNotifications([
        ...notifications,
        {
          id: id++,
          ...notification,
        },
      ]);
    },
    [setNotifications, notifications]
  );

  /**
   * **Function to remove a notification from the the notifications array.**
   */
  const removeNotification = useCallback(
    /** Take in a notification object of type IToast */
    (toast: IToast) => {
      /** Filter out the notification from the notifications array
       *  whose id equals the notification provided's id. */
      setNotifications((notifications) =>
        notifications.filter((notification) => notification.id !== toast.id)
      );
    },
    [setNotifications]
  );

  return (
    <ToastContext.Provider
      value={{
        notifications,
        setNotifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

/**
 * Create an instance of context customized to the useToastContext namespace
 */
function useToastContext() {
  const context = useContext(ToastContext);
  return {
    ...context,
  };
}

export { useToastContext, ToastContextProvider };
