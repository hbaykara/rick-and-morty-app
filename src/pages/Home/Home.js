import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, getCharacterClear } from "store/characters/actions";
import debounce from "lodash/debounce";
import "./Home.scss";
import CharacterList from "components/CharacterList";
import Spinner from "components/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { charactersData, loading, error, nextPage } = useSelector(
    (state) => state.characters
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    const onscrollHandler = debounce(
      () => {
        if (
          document.documentElement.scrollHeight - window.pageYOffset <=
            window.innerHeight &&
          nextPage &&
          !loading
        ) {
          setPage((page) => page + 1);
        }
      },
      100,
      { leading: true }
    );

    window.addEventListener("scroll", onscrollHandler);
    return () => {
      window.removeEventListener("scroll", onscrollHandler);
    };
  }, [loading, nextPage]);

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [page, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(getCharacterClear());
    };
  }, [dispatch]);

  return (
    <div className="home">
      {error ? (
        <h3 className="error-message">Something went wrong</h3>
      ) : (
        loading && <Spinner />
      )}
      {charactersData.length > 0 && (
        <CharacterList characters={charactersData} />
      )}
      {!nextPage && <h4 className="no-more">Daha fazla sonuç bulunamadı</h4>}
    </div>
  );
};

export default Home;
