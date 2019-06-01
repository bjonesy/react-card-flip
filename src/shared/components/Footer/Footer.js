import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Footer.scss";

const Footer = props => {
  const { isAppFooter, children } = props;
  const footerClass = classNames({
    "app-footer footer": isAppFooter
  });
  return <footer className={footerClass}>{children}</footer>;
};

Footer.defaultProps = {
  isAppFooter: false,
  children: PropTypes.node
};

Footer.propTypes = {
  isAppFooter: PropTypes.bool,
  children: PropTypes.node
};

export default Footer;
