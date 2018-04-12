import React, { Component } from "react";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export class WithScrolling extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll() {
    const { scrollElementName, options } = this.props;
    scroller.scrollTo(scrollElementName, {
      duration: 1000,
      smooth: true,
      offset: -100,
      ...options
    });
  }

  componentDidMount() {
    if (this.props.scrollOnMount) {
      this.scroll();
    }
  }

  render() {
    return this.props.children(this.scroll);
  }
}
