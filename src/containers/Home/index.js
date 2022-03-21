import React, {useEffect} from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import {getPokemons} from '../../api/getPokemons'
import { connect } from 'react-redux';
import './styles.css';
import { setPokemon } from '../../actions';


//CONEXION CON EL STORE DE REDUX
const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  getPokemons: (value) => dispatch(setPokemon(value))
})
 /////////////////


function Home({list, setPokemons}) {
  useEffect(()=>{
    getPokemons().then(response => {
      setPokemons(response.results)
    })
  },[])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
