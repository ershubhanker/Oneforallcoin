import { SET_ETH_AMOUNT, SET_REFERAL_ADDRESS, SET_REFERAL_CODE, SET_TOKEN_AMOUNT, SET_TOKEN_AMOUNTUSD, SET_USDT_AMOUNT, SET_VESTING_CODE } from "./actionTypes";

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


export const setReferalCode = (referal) => {
  return {
    type : SET_REFERAL_CODE,
    payload : referal
  }
}

export const setRefAdd = (refAdd) => {
  return {
    type : SET_REFERAL_ADDRESS,
    payload : refAdd
  }
}


export const setVestingCode = (vestingCode) => {
  return {
    type : SET_VESTING_CODE,
    payload : vestingCode
  }
}