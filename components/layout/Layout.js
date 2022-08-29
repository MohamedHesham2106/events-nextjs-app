import { Fragment } from "react";
import MainHeader from "./MainHeader";

const layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default layout;
