import React from 'react';
import { connect } from 'react-redux';
import {getQuote} from '../actions';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const QuoteCard = (props) =>{
    // 
    console.log('props!!!', props)
    return(
        <div className='content'>
        <h2>Random Quote</h2>
        <Button onClick={props.getQuote} variant="contained" color="secondary">Get Quote!</Button><br/>
        <Container maxWidth="sm">
        {!props.quote && !props.isLoading && (
          <h2>{props.quote}<br/><br/>{props.author}</h2>
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
        {props.quote && !props.isLoading && <h2>{props.quote}<br/><br/>{props.author}</h2>}
        </Container>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    quote: state.quote,
    author: state.author,
    error: state.error}
}
export default connect(mapStateToProps, {getQuote})(QuoteCard);