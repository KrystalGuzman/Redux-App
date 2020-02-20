import {LOADING, DATES, YEARS, TRIVIA, NUMBER, ERROR} from '../actions/index';

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
        case DATES:
            return{
                ...state,
                isLoading:false,
                date:action.payload
            }
        case YEARS:
            return{
                ...state,
                isLoading:false,
                year:action.payload
            }
        case TRIVIA:
            return{
                ...state,
                isLoading:false,
                trivia:action.payload
            }
        case NUMBER:
            return{
                ...state,
                isLoading:false,
                number:action.payload
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