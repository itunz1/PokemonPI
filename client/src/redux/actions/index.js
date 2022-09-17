import axios from "axios";



export const getPokemons = () => {
  return async function (dispatch) {
    var pokemons = await axios.get("http://localhost:3001/pokemon");

    return dispatch({
      type: "GET_POKEMONS",
      payload: pokemons.data,
    });
  };
}

export const searchByName = (name) => {
    return async function (dispatch) {
      try {
        var pokemonSearch = await axios.get(
          `http://localhost:3001/pokemon?name=${name}`
        );
  
        return dispatch({
          type: "SEARCH_BY_NAME",
          payload: pokemonSearch.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

export const getTypes = () => {
    return async function (dispatch) {
      var types = await axios.get("http://localhost:3001/type");
  
      return dispatch({
        type: "GET_TYPES",
        payload: types.data,
      });
    };
  }

  export const getDetail = (id) => {
    return async function (dispatch) {
      try {
        var pokemonDetail = await axios.get(
          `http://localhost:3001/pokemon/${id}`
        );
        return dispatch({
          type: "GET_DETAIL",
          payload: pokemonDetail.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function postPokemon(payload) {
    return async function (dispatch) {
      try {
        const pokemonCreate = await axios.post(
          "http://localhost:3001/pokemon/",
          payload
        );
  
        return pokemonCreate;
      } catch (error) {
        console.log(error);
      }
    };
  }