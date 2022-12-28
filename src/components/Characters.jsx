import React, { useState, useReducer, useRef, useCallback } from "react";
import { useCharacters } from "../Hooks/useCharacters";
import Search from "./Search";
const initialState = {
  favorites: [],
};
const API = "https://rickandmortyapi.com/api/character/";
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
function Characters() {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  /*const handleSearch = () => {
    setSearch(searchInput.current.value);
  };*/

  const characters = useCharacters(API);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="Container  items-center grid grid-cols-4 gap-4 mt-7  ">
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
        <Search
          search={search}
          handleSearch={handleSearch}
          searchInput={searchInput}
        />
        {filteredUsers.map((characters) => (
          <div
            className="Container2 w-full h-auto rounded-b-lg mb-8  rounded overflow-hidden shadow-lg  "
            key={characters.id}
          >
            <img src={characters.image} />
            <h2 className="text-lg"> {characters.name} </h2>
            <button type="button" onClick={() => handleClick(characters)}>
              Agregar a favoritos
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters;
