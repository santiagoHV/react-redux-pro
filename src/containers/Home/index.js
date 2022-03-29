import React, {useEffect} from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { fetchPokemonsWithDetails, getPokemonsWithDetails, setError, toggleLoader } from '../../actions';
import { getPokemons } from '../../api/getPokemons';
import Loader from '../../components/Loader';


//CONEXION CON EL STORE DE REDUX CON CONNECT
// const mapStateToProps = state => ({
//   list: state.list
// })

// const mapDispatchToProps = dispatch => ({
//   setPokemons: (value) => dispatch(setPokemon(value))
// })
 /////////////////


function Home() {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)
  const loading = useSelector(state => state.loading)

  useEffect(()=>{
    //para thunk
    // dispatch(getPokemonsWithDetails())
    
    dispatch(toggleLoader())
    getPokemons()
      .then(response => {
        dispatch(fetchPokemonsWithDetails(response.results))
        dispatch(toggleLoader())
      })
      .catch(error => {
        setError({ message: 'ocurrio un error' }, error)
      })
  },[])

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
