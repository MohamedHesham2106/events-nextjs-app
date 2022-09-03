import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null, // will be object {title,message,status},
  showNotification: (data) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = (props) => {
  const [notification, setNotification] = useState();

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      const timer = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);
      
      //clean up function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);
  const showNotificationHandler = (data) => {
    setNotification(data);
  };
  const hideNotificationHandler = () => {
    setNotification(null);
  };
  const context = {
    notification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
