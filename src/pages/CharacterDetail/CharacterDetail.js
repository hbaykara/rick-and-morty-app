import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterInfo, getCharacterEpisodesClear } from "store/characters/actions";
import CharacterInfo from "components/CharacterInfo";
import Episode from "components/Episode";
import BackLink from "components/BackLink";
import Spinner from "components/Spinner";
import "./CharacterDetail.scss";

const CharacterDetail = () => {
  const { characterId } = useParams();
  const dispatch = useDispatch();
  const { characterInfo, characterEpisodeUrls, loading, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacterInfo(characterId));

    return () => {
      dispatch(getCharacterEpisodesClear());
    };
  }, [dispatch]);

  return (
    <>
      {error ? (
        <h3 className="error-message">Something went wrong</h3>
      ) : !loading ? (
        <div className="character-detail">
          <BackLink />
          <div className="character-detail__info">
            {Object.keys(characterInfo).length > 0 && (
              <CharacterInfo characterInfo={characterInfo} />
            )}
            {characterEpisodeUrls.length > 0 && (
              <Episode characterEpisodeUrls={characterEpisodeUrls} />
            )}
          </div>
        </div>
      ) : (
        <div className="character-detail">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default CharacterDetail;
