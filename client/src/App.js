import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/(home|create|pokemon)" component={Nav} />
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/pokemon/:id" component={PokemonDetail}/>
      <Route path="/create" component={CreatePokemon}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
