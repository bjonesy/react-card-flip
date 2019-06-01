import React, { useState } from "react";
import Flipcard from "@kennethormandy/react-flipcard";
import CardFront from "./CardFront/CardFront";
import CardBack from "./CardBack/CardBack";

import "./Card.scss";
import "@kennethormandy/react-flipcard/dist/Flipcard.css";

const Card = props => {
  const [flipped, isFlipped] = useState(false);
  const { name, height, gender } = props;

  return (
    <div className="column is-half">
      <div className="card">
        <Flipcard flipped={flipped}>
          <CardFront onFlip={flip => isFlipped(flip)} name={name} />
          <CardBack
            onFlip={flip => isFlipped(flip)}
            height={height}
            gender={gender}
          />
        </Flipcard>
      </div>
    </div>
  );
};

export default Card;
