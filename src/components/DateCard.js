import React from 'react';
import { connect } from 'react-redux';
import {getDate} from '../actions/';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const DateCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div class='content'>
        <h2>Random Date Fact</h2>
        <Button onClick={props.getDate} variant="contained" color="secondary">Get Date!</Button><br/>
        <Container maxWidth="sm">
        {!props.date && !props.isLoading && (
          <h2>{props.date}</h2>
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
        {props.date && !props.isLoading && <h2>{props.date}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    date: state.date,
    error: state.error}
}
export default connect(mapStateToProps, {getDate})(DateCard);