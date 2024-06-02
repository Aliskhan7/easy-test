import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import { CourseListProps } from "../../types.ts";

const Card: React.FC<CourseListProps> = ({ themes, loading }) => {
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="cards">
          {themes?.map((theme) => {
            return (
              <div
                key={theme.id}
                className="cards-item"
                style={{ background: `${theme.bgColor}` }}
              >
                {loading ? (
                  <div className="loader-block">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <div className="cards-item__img">
                    <img src={theme.image} alt="img" />
                  </div>
                )}

                <p className="cards-item_text">{theme.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Card;
