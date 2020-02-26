import axios from 'axios';

export const LOADING = 'LOADING';
export const INSULT = 'INSULT';
export const ERROR = 'ERROR';
export const ADVICE = 'ADVICE';
export const JOKE = 'JOKE';
export const QUOTE = 'QUOTE';
export const AUTHOR = 'AUTHOR';
export const PUNCHLINE = 'PUNCHLINE';


export const getInsult = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(res => {
          console.log("over here!", res.data.insult)
          dispatch({type: INSULT, payload: res.data.insult});
          console.log("response!!!!", res.data.insult);
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err})
            console.log(err.data);
        });
    };
  };

  export const getAdvice = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('https://api.adviceslip.com/advice')
        .then(res => {
          console.log("over here!", res.data.slip.advice)
          dispatch({type: ADVICE, payload: res.data.slip.advice});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err.res.data.slip.advice })
        });
    };
  };
  export const getJoke = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then(res => {
          console.log("over here!", res.data)
          dispatch({type: JOKE, payload: res.data.setup});
          dispatch({type: PUNCHLINE, payload: res.data.punchline});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err })
        });
    };
  };
  export const getQuote = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('https://quote-garden.herokuapp.com/quotes/random')
        .then(res => {
          console.log("over here!", res.data)
          dispatch({type: QUOTE, payload: res.data.quoteText});
          dispatch({type: AUTHOR, payload: res.data.quoteAuthor});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err })
        });
    };
  };