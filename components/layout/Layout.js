import { Fragment, useContext } from "react";
import MainHeader from "./MainHeader";
import Notification from "../ui/Notification";
import NotificationContext from "../../context/notification-context";

const Layout = (props) => {
  const NotificationCtx = useContext(NotificationContext);
  const activeNotification = NotificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
