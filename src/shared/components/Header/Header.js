import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Header = props => {
  const { isAppHeader, children } = props;
  const headerClass = classNames({
    "app-header": isAppHeader
  });
  return <header className={headerClass}>{children}</header>;
};

Header.defaultProps = {
  isAppHeader: false,
  children: PropTypes.node
};

Header.propTypes = {
  isAppHeader: PropTypes.bool,
  children: PropTypes.node
};

export default Header;
