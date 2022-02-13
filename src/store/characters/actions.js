import {
  GET_CHARACTER_REQUEST,
  GET_CHARACTERS,
  GET_CHARACTER_INFO,
  GET_CHARACTER_EPISODE,
  GET_CHARACTER_RESET,
  GET_CHARACTER_EPISODE_RESET,
  GET_CHARACTER_ERROR,
} from "./actionTypes";
import axios from "axios";

export const getCharacters = (page) => {
  return (dispatch) => {
    dispatch({ type: GET_CHARACTER_REQUEST });
    axios
      .get(`${process.env.REACT_APP_URL}/character?page=${page}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_CHARACTERS, payload: data }))
      .catch((error) =>
        dispatch({ type: GET_CHARACTER_ERROR, payload: error })
      );
  };
};

export const getCharacterInfo = (characterId) => {
  return (dispatch) => {
    dispatch({ type: GET_CHARACTER_REQUEST });
    axios
      .get(`${process.env.REACT_APP_URL}/character/${characterId}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_CHARACTER_INFO, payload: data }))
      .catch((error) =>
        dispatch({ type: GET_CHARACTER_ERROR, payload: error })
      );
  };
};

export const getCharacterEpisodes = (characterEpisodeEndpoints) => {
  return (dispatch) => {
    Promise.all(
      characterEpisodeEndpoints.map((characterEpisodeEndpoint) => {
        return axios
          .get(`${characterEpisodeEndpoint}`)
          .then(({ data }) => data.name);
      })
    )
      .then((data) => dispatch({ type: GET_CHARACTER_EPISODE, payload: data }))
      .catch((error) =>
        dispatch({ type: GET_CHARACTER_ERROR, payload: error })
      );
  };
};

export const getCharacterClear = () => {
  return (dispatch) => {
    dispatch({ type: GET_CHARACTER_RESET });
  };
};

export const getCharacterEpisodesClear = () => {
  return (dispatch) => {
    dispatch({ type: GET_CHARACTER_EPISODE_RESET });
  };
};
