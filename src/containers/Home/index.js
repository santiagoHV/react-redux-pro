import React, {useEffect} from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import {getPokemons} from '../../api/getPokemons'
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { setPokemon } from '../../actions';


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

  useEffect(()=>{
    getPokemons().then(response => {
      dispatch(setPokemon(response.results))
    })
  },[])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
