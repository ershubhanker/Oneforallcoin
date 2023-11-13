import { SET_ETH_AMOUNT, SET_TOKEN_AMOUNT, SET_TOKEN_AMOUNTUSD, SET_USDT_AMOUNT } from "./actionTypes";

export const setEthAmount = (ethAmount) => {
  return {
    type: SET_ETH_AMOUNT,
    payload: ethAmount,
  };
};

export const setUsdAmount = (usdAmount) => {
  return {
    type : SET_USDT_AMOUNT,
    payload : usdAmount
  }
}

export const setTokenAmount = (tokenAmount) => {
  return {
    type: SET_TOKEN_AMOUNT,
    payload: tokenAmount,
  };
};

export const setTokenAmountUsd = (tokenAmountUsd) => {
  return {
    type: SET_TOKEN_AMOUNTUSD,
    payload: tokenAmountUsd
  }
}
