import React from 'react';
import { connect } from 'react-redux';
import {getJoke} from '../actions';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const JokeCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div className='content'>
        <h2>Random Joke</h2>
        <Button onClick={props.getJoke} variant="contained" color="secondary">Get Joke!</Button><br/>
        <Container maxWidth="sm">
        {!props.joke && !props.isLoading && (
          <h2>{props.joke}{props.punchline}</h2>
          
        )}
        {props.isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {props.joke && !props.isLoading && <h2>{props.joke}<br/><br/>{props.punchline}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    joke: state.joke,
    punchline: state.punchline,
    error: state.error}
}
export default connect(mapStateToProps, {getJoke})(JokeCard);