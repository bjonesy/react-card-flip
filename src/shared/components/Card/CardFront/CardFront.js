import React from "react";
import PropTypes from "prop-types";
import "./CardFront.scss";

const CardFront = props => {
  const { name, onFlip } = props;

  return (
    <div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <button
          className="button is-link is-outlined is-large is-fullwidth"
          onClick={() => onFlip(true)}
        >
          Flip
        </button>
      </footer>
    </div>
  );
};

CardFront.defaultProps = {
  onFlip: undefined
};

CardFront.propTypes = {
  onFlip: PropTypes.func
};

export default CardFront;
