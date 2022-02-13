import Character from "components/Character";
import "./CharacterList.scss";

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.length > 0 &&
        characters.map((character) => (
          <Character key={character.id} {...character} />
        ))}
    </div>
  );
};

export default CharacterList;
