import React from 'react';
import { connect } from 'react-redux';
import {getInsult} from '../actions';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const InsultCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div className='content'>
        <h2>Random Insults</h2>
        <Button onClick={props.getInsult} variant="contained" color="secondary">Get Insult!</Button><br/>
        <Container maxWidth="sm">
        {!props.insult && !props.isLoading && (
          <h2>{props.insult}</h2>
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
        {props.insult && !props.isLoading && <h2>{props.insult}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    insult: state.insult,
    error: state.error}
}
export default connect(mapStateToProps, {getInsult})(InsultCard);