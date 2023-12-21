import { SET_ETH_AMOUNT, SET_REFERAL_ADDRESS, SET_REFERAL_CODE, SET_TOKEN_AMOUNT, SET_TOKEN_AMOUNTUSD, SET_USDT_AMOUNT, SET_VESTING_CODE } from "./actionTypes";

const initialState = {
    ethAmount : "",
    usdAmount : "",
    tokenAmount : "",
    tokenAmountUsd : "",
    referal : "",
    refAdd : "",
    vestingCode : []
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
            case SET_REFERAL_CODE : 
            return {
                ...state,
                referal : action.payload
            }
            case SET_REFERAL_ADDRESS : 
            return {
                ...state,
                refAdd : action.payload
            }

            case SET_VESTING_CODE :
                return {
                    ...state,
                    vestingCode : action.payload
                }
            default : 
            return state
    }
}

