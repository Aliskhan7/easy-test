import React from "react";
import { useThemes } from "../../context/themes-context";
import Skeleton from "../Skeleton/Skeleton";

const Card = ({ themes, loading }) => {
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="cards">
          {themes?.map((theme) => {
            return (
              <div
                className="cards-item"
                style={{ background: `${theme.bgColor}` }}
              >
                <img src={theme.image} alt="img" />
                <p className="cards-item_text">{theme.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
