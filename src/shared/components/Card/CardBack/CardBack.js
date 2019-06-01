import React from "react";
import PropTypes from "prop-types";
import "./CardBack.scss";

const CardBack = props => {
  const { gender, height, onFlip } = props;

  return (
    <div>
      <div className="card-content">
        <p>
          <span>Gender: {gender}</span>
        </p>
        <p>
          <span>Height: {height}</span>
        </p>
      </div>
      <footer className="card-footer">
        <button
          onClick={() => onFlip(false)}
          className="button is-link is-large is-fullwidth"
        >
          Flipped
        </button>
      </footer>
    </div>
  );
};

CardBack.defaultProps = {
  onFlip: undefined
};

CardBack.propTypes = {
  onFlip: PropTypes.func
};

export default CardBack;
