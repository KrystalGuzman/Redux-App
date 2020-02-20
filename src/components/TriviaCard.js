import React from 'react';
import { connect } from 'react-redux';
import {getTrivia} from '../actions/';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const TriviaCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div class='content'>
        <h2>Random Trivia Fact</h2>
        <Button onClick={props.getTrivia} variant="contained" color="secondary">Get Trivia!</Button><br/>
        <Container maxWidth="sm">
        {!props.trivia && !props.isLoading && (
          <h2>{props.trivia}</h2>
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
        {props.trivia && !props.isLoading && <h2>{props.trivia}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    trivia: state.trivia,
    error: state.error}
}
export default connect(mapStateToProps, {getTrivia})(TriviaCard);