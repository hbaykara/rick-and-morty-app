import {
  GET_CHARACTER_REQUEST,
  GET_CHARACTERS,
  GET_CHARACTER_INFO,
  GET_CHARACTER_EPISODE,
  GET_CHARACTER_RESET,
  GET_CHARACTER_EPISODE_RESET,
  GET_CHARACTER_ERROR,
} from "./actionTypes";

const initialState = {
  charactersData: [],
  characterInfo: {},
  characterEpisodeUrls: [],
  characterEpisodes: [],
  nextPage: {},
  loading: false,
  error: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CHARACTERS:
      return {
        ...state,
        charactersData: [...state.charactersData, ...action.payload.results],
        nextPage: action.payload.info.next,
        loading: false,
      };
    case GET_CHARACTER_INFO:
      return {
        ...state,
        characterInfo: action.payload,
        characterEpisodeUrls: action.payload.episode.slice(-5).reverse(),
        loading: false,
      };
    case GET_CHARACTER_EPISODE:
      return {
        ...state,
        characterEpisodes: action.payload,
      };
    case GET_CHARACTER_EPISODE_RESET:
      return {
        ...state,
        characterEpisodeUrls: [],
        characterEpisodes: [],
      };
    case GET_CHARACTER_RESET:
      return {
        ...state,
        charactersData: [],
      };
    case GET_CHARACTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
