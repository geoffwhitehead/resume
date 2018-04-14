import React from "react";
// import { Button as SemanticButton } from "semantic-ui-react";
import "./Button.scss";

export const Button = ({ children, ...props }) => {
  return <button className="button-std" {...props}>{children}</button>;
};
