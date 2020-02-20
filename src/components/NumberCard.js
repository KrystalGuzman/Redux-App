import React from 'react';
import { connect } from 'react-redux';
import {getNumber} from '../actions/';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const NumberCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div class='content'>
        <h2>Random Number Fact</h2>
        <Button onClick={props.getNumber} variant="contained" color="secondary">Get Number!</Button><br/>
        <Container maxWidth="sm">
        {!props.number && !props.isLoading && (
          <h2>{props.number}</h2>
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
        {props.number && !props.isLoading && <h2>{props.number}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    number: state.number,
    error: state.error}
}
export default connect(mapStateToProps, {getNumber})(NumberCard);