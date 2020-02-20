import axios from 'axios';

export const LOADING = 'LOADING';
export const DATES = 'DATES';
export const ERROR = 'ERROR';
export const YEARS = 'YEARS';
export const TRIVIA = 'TRIVIA';
export const NUMBER = 'NUMBER';


export const getDate = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('http://numbersapi.com/random/date')
        .then(res => {
          console.log("over here!", res.data)
          dispatch({type: DATES, payload: res.data});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err })
        });
    };
  };

  export const getYear = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('http://numbersapi.com/random/year')
        .then(res => {
          console.log("over here!", res.data)
          dispatch({type: YEARS, payload: res.data});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err })
        });
    };
  };
  export const getTrivia = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('http://numbersapi.com/random/trivia')
        .then(res => {
          console.log("over here!", res.data)
          dispatch({type: TRIVIA, payload: res.data});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err })
        });
    };
  };
  export const getNumber = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('http://numbersapi.com/random/math')
        .then(res => {
          console.log("over here!", res.data)
          dispatch({type: NUMBER, payload: res.data});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err })
        });
    };
  };