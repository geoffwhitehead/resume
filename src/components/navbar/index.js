import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import "./index.scss";

export const NavbarDisplay = () => (
  <Menu fixed="top" className="navbar">
    <Menu.Item className="name">Geoff Whitehead</Menu.Item>
    <Menu.Item position="right" className="role">
      JavaScript Developer
    </Menu.Item>
  </Menu>
);
