import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterEpisodes } from "store/characters/actions";
import "./Episode.scss";

const Episode = ({ characterEpisodeUrls }) => {
  const dispatch = useDispatch();
  const { characterEpisodes } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacterEpisodes(characterEpisodeUrls));
  }, [dispatch]);

  return (
    <div className="episode">
      <h2>Last Episodes</h2>
      <ul>
        {characterEpisodes.length > 0 &&
          characterEpisodes.map((episode, i) => (
            <li key={i} className="episode__name">
              {episode}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Episode;
