import React from 'react';
import { connect } from 'react-redux';
import {getYear} from '../actions/';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const YearCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div class='content'>
        <h2>Random Date Fact</h2>
        <Button onClick={props.getYear} variant="contained" color="secondary">Get Year!</Button><br/>
        <Container maxWidth="sm">
        {!props.year && !props.isLoading && (
          <h2>{props.year}</h2>
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
        {props.year && !props.isLoading && <h2>{props.year}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
        year: state.year,
    error: state.error}
}
export default connect(mapStateToProps, {getYear})(YearCard);