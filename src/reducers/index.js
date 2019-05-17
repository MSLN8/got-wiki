import { DATA_LOADED_CHAR, DATA_LOADED_ALL } from "../constants/action-types";

const initialState = {
  books: [],
  characters: []
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED_ALL:
      return Object.assign({}, state, {
        books: state.books.concat(action.payload)
      });
    case DATA_LOADED_CHAR:
      return Object.assign({}, state, {
        characters: state.characters.concat(action.payload)
      });
  }
  return state;
}

export default mainReducer;

// function mainReducer(state = initialState, action) {
//   if (action.type === DATA_LOADED_REQUEST) {
//     return Object.assign({}, state, {
//       books: state.books.concat(action.payload),
//       characters: state.characters.concat(action.payload)
//     });
//   }
//   return state;
// }
