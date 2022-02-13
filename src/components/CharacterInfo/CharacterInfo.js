import React from 'react';
import './CharacterInfo.scss';

const CharacterInfo = ({characterInfo}) => {

  return (
    <div className="character-info">
      <div className="character-info__img">
        <img src={characterInfo.image} alt={characterInfo.name} />
      </div>
      <div className="character-info">
        <ul>
          <li>
            <span className="character-info__label">Name: </span>
            <span className="character-info">{characterInfo.name}</span>
          </li>
          <li>
            <span className="character-info__label">Origin: </span>
            <span className="character-info">{characterInfo.origin.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterInfo;
