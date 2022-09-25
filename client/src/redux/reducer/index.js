const initialState = {
  pokemons: [],
  allTypes: [],
  filter: [],
  detail: [],
  allPokemons: [],
  loading: false,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        filter: action.payload,
        loading: false,
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
        loading: false,
      };
    case "POST_POKEMON":
      return {
        ...state,
      };
    case "DELETE_POKEMON":
      return {
        ...state,
        pokemons: state.pokemons.filter(e => e.id !== action.payload),
        allPokemons: state.pokemons.filter(e => e.id !== action.payload)
      }
    case "FILTER_BY_NAME":
      const allPoke = state.pokemons;
      const orderPokemon = action.payload === 'abc'
        ? allPoke.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1
          }
          return 0;
        })
        : allPoke.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1
          }
          return 0;
        })
        return{
          ...state,
          pokemons: orderPokemon,
          
        }
        case "FILTER_BY_ATTACK":
          const allPokeAttack = state.pokemons
          const orderByAttack = action.payload === 'attack+'
          ? allPokeAttack.sort(function(a, b) {
            if(a.attack > b.attack) {
              return 1
            }
            if(b.attack > a.attack) {
              return -1
            }
            return 0;
          })
          : allPokeAttack.sort(function(a, b) {
            if(a.attack > b.attack) {
              return -1
            }
            if(b.attack > a.attack) {
              return -1
            }
            return 0;
          })
          return{
            ...state,
            pokemons: orderByAttack,
            
          }
        case "FILTER_CREATE":
          const pokemonCreate = state.allPokemons
          let search = [];
          if(action.payload === 'all'){
            search = pokemonCreate;
          }
          if(action.payload === 'createDb'){
            const createDb = pokemonCreate.filter(e => e.createInData)
            if(createDb.length > 0) {
              search = createDb;
            }else if(!createDb){
              search = "no exsite";
            }
          }
          if(action.payload === 'api'){
            const api = pokemonCreate.filter(e => !e.createInData)
            search = api;
          }
          return {
            ...state,
            pokemons: search,
            
          }
        case 'FILTER_BY_TYPE':
          const typeOrder = state.allPokemons;
          const orderType = action.payload === 'all'? typeOrder : typeOrder.filter(e => 
           e.types.some(t => t === action.payload || t.name === action.payload));
           return {
            ...state,
            pokemons: orderType,
            
           }
        case "LOADING":
            return{
              ...state,
              loading: true
            }
        default:
          return state;

  }
}

export default rootReducer