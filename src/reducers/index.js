import {LOADING, JOKE, INSULT, QUOTE, ADVICE, AUTHOR, PUNCHLINE, ERROR} from '../actions/index';

export const initialState={
    date: null,
    isLoading:false,
    error: ''
};
export const Reducer = (state = initialState, action) =>{
    console.log('state', state);
    console.log('action', action)
    switch (action.type) {
        case LOADING:
            return{
                ...state,
                isLoading: true,
                error: ''
            }        
        case INSULT:
            return{
                ...state,
                isLoading:false,
                insult:action.payload
            }
        case ADVICE:
            return{
                ...state,
                isLoading:false,
                advice:action.payload
            }
        case JOKE:
            return{
                ...state,
                isLoading:false,
                joke:action.payload
            }
        case PUNCHLINE:
            return{
                ...state,
                isLoading:false,
                punchline:action.payload
                }
        case QUOTE:
            return{
                ...state,
                isLoading:false,
                quote:action.payload
            }
        case AUTHOR:
            return{
                ...state,
                isLoading:false,
                author:action.payload
            }          
        case ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        
        default: 
        return state;
    }
};