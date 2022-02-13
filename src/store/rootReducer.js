import { combineReducers } from "redux";
import charactersReducer from "./characters/characters";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
