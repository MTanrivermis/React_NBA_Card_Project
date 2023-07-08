import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import { useState } from "react";

const Player_Card = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);

  const handeClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="m-auto" onClick={handeClick}>
      {showImage ? (
        <div>
          <div>
            <img className="player-img" src={img} alt={name} />
          </div>
        </div>
      ) : (
        <ul className="statistics-card m-auto">
          {statistics.map((stat, id) => {
            return (
              <div>
                <li className="mt-2" key={id}>
                  🏀 {stat}
                </li>
              </div>
            );
          })}
        </ul>
      )}
      <div>
        <h5 className="text-center text-dark">{name}</h5>
      </div>
    </div>
  );
};

export default Player_Card;
