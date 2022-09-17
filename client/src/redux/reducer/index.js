const initialState = {
    pokemons: [],
    allPokemons: [],
    allTypes: [],
    filter: [],
    detail: [],
  }
  
  function rootReducer (state = initialState, action){
      switch (action.type) {
          case "GET_POKEMONS":
        return {
          ...state,
          pokemons: action.payload,
          allPokemons: action.payload,
          filter: action.payload,
        };
      case "GET_TYPES":
        return {
          ...state,
          allTypes: action.payload,
        };
        case "SEARCH_BY_NAME":
            return {
              ...state,
              pokemons: action.payload,
        };
        case "GET_DETAIL":
            return {
              ...state,
              detail: action.payload,
        };
        case "POST_POKEMON":
            return {
              ...state,
        };
          default:
              return state;
      
      }
  }

  export default rootReducer