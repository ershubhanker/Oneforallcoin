import { SET_ETH_AMOUNT, SET_TOKEN_AMOUNT, SET_TOKEN_AMOUNTUSD, SET_USDT_AMOUNT } from "./actionTypes";

const initialState = {
    ethAmount : "",
    usdAmount : "",
    tokenAmount : "",
    tokenAmountUsd : ""
};

 export const reducer = (state = initialState , action) => {
    switch(action.type){
        case SET_ETH_AMOUNT:
            return {
                ...state,
                ethAmount : action.payload
            };
            
            case SET_USDT_AMOUNT:
                return{
                    ...state,
                    usdAmount : action.payload
                }

            case SET_TOKEN_AMOUNT : 
            return {
                ...state,
                tokenAmount : action.payload
            };

            case SET_TOKEN_AMOUNTUSD : 
            return {
                ...state,
                tokenAmountUsd : action.payload
            }
            default : 
            return state
    }
}

