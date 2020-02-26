import React from 'react';
import { connect } from 'react-redux';
import {getAdvice} from '../actions/';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const AdviceCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div className='content'>
        <h2>Random Advice</h2>
        <Button onClick={props.getAdvice} variant="contained" color="secondary">Get advice!</Button><br/>
        <Container maxWidth="sm">
        {!props.advice && !props.isLoading && (
          <h2>{props.advice}</h2>
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
        {props.advice && !props.isLoading && <h2>{props.advice}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
        advice: state.advice,
    error: state.error}
}
export default connect(mapStateToProps, {getAdvice})(AdviceCard);