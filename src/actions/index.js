import { DATA_LOADED_CHAR, DATA_LOADED_ALL } from "../constants/action-types";

export function getData() {
  return function(dispatch) {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://anapioficeandfire.com/api/books";
    return fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED_ALL, payload: json });
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  };
}

export function getCharacters(idchar) {
  return function(dispatch) {
    return fetch("https://anapioficeandfire.com/api/characters/`${idchar}`")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED_CHAR, payload: json });
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  };
}
