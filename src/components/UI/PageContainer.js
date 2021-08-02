import React from "react";

import classes from "./PageContainer.module.css";

const PageContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default PageContainer;
