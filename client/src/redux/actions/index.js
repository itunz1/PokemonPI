import axios from "axios";



export const getPokemons = () => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" })
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
        alert('Pokemon no existe');
      }
    };
  }

export const getTypes = () => {
    return async function (dispatch) {
      var types = await axios.get("http://localhost:3001/type");
      dispatch({ type: "LOADING" })
      return dispatch({
        type: "GET_TYPES",
        payload: types.data,
      });
    };
  }

  export const getDetail = (id) => {
    return async function (dispatch) {
      try {
        dispatch({ type: "LOADING" })
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
  
  export const postPokemon = (payload) => {
    return async function (dispatch) {
      try {
        const pokemonCreate = await axios.post(
          "http://localhost:3001/pokemon/",
          payload
        );
  
        return pokemonCreate;
      } catch (error) {
        alert("No se pudo crear pokemon faltan datos");
      }
    };
  }

  export function filerByName(payload) {
    return{
      type: "FILTER_BY_NAME",
      payload,
    }
  }

  export function filterByType(payload){
    return{
      type: 'FILTER_BY_TYPE',
      payload,
    }
  }

  export function filterCreate(payload){
    return{
      type: "FILTER_CREATE",
      payload,
    }
  }

  export function filterByAttack(payload){
    return{
      type: "FILTER_BY_ATTACK",
      payload,
    }
  }

  export const loading = (payload) => {
    return {
      type: "LOADING_TOGGLE",
      payload,
    }
  }

  export function deletePokemon(id){
    return{
      type: "DELETE_POKEMON",
      payload: id,
    }
  }

  export function removePoke(id){
    return async function(dispatch){
      dispatch(deletePokemon(id));
      try{
        await axios.delete(`http://localhost:3001/pokemon/${id}`)
      }catch(error){
        console.log(error)
      }
    }
  }