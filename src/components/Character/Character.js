import { Link } from "react-router-dom";
import "./Character.scss";

const Character = ({ name, image, id }) => {
  return (
    <div className="character">
      <Link to={`/detail/${id}`}>
        <div className="character__img">
          <img src={image} alt={name} />
          <span className="character__name">{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Character;
