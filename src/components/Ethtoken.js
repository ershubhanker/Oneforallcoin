import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEthAmount, setTokenAmount } from '../redux/calculateReducer/action';

const Ethtoken = ({web3 , myContract , myTokensContract , isConnected }) => {
    const ethAmount = useSelector((state) => state.calculateReducer.ethAmount);
    const tokenAmount = useSelector(
      (state) => state.calculateReducer.tokenAmount
    );
const dispatch = useDispatch()



const debounce = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

const calculateTokenAmount = async () => {
    if(web3){
        try {
            if(isNaN(ethAmount) || ethAmount.trim() == ""){
                console.log("Invalid Ethereum Amount")
                return;
            }

            const ethAmountFloat = parseFloat(ethAmount)
            const ethAmountWei = web3.utils.toWei(
                ethAmountFloat.toString(),
                "ether"
            )

            const _type = 1

            myContract.methods
            .calculateTokens(ethAmountWei , 1 , _type)
            .call()
            .then((result)=>{
                dispatch(setTokenAmount(Number(result).toFixed(3).substring(0,4)))
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const debouncedCalculateTokenAmount = debounce(calculateTokenAmount, 100);
useEffect(() => {
    // This effect will run whenever ethAmount changes
    debouncedCalculateTokenAmount(ethAmount);
  }, [ethAmount]);

const buyTokens = async () => {
    if(web3 && myContract){
        try {
            if(isNaN(ethAmount) || ethAmount.trim() === ""){
                return;
            }

            const ethAmountFloat = parseFloat(ethAmount)

            const ethAmountWei = web3.utils.toWei(
                ethAmountFloat.toString(),
                "ether"
            )
            const _type = 1;
            const referralAddress = "0x0000000000000000000000000000000000000000"
            const accounts = await web3.eth.getAccounts()

            const userAddress = accounts[0]
            const userBalanceWei = await web3.eth.getBalance(userAddress)

            const userBalanceFloat = parseFloat(
                web3.utils.fromWei(userBalanceWei , "ether")
            );

            await myContract.methods
            .buyTokens(ethAmountWei , _type , referralAddress)
            .send({from : userAddress , value: ethAmountWei})
            .on("transactionHash" , (hash) => {
        console.log("Transaction Hash:" , hash)
            })
            .on("receipt" , (receipt)=>{
                console.log("Transaction Receipt:" , receipt)
            })
            .on("error" , (error)=>{
                console.log("Transaction Error:" , error)
            })

        } catch (error) {
           console.log(error) 
        }
    }
}

  return (
    <div>
        {isConnected && (
    <>
     <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "50%" }}>
                <label style={{ flex: "1", marginRight: "20px" }}>
                  Ethereum:
                  <input
                    type="number"
                    value={ethAmount}
                    placeholder="Ethereum Value"
                    onChange={(e) => {
                      const newValue = e.target.value;

                      console.log(newValue);
                      dispatch(setEthAmount (newValue));
                      console.log(ethAmount); // Dispatch action to update ethAmount
                    }}
                    min="0"
                  />
                </label>
              </div>

              <div style={{ width: "50%" }}>
                <label style={{ flex: "1", marginRight: "20px" }}>
                  OFA:
                  <input
                    type="text"
                    style={{ caretColor: "transparent" }}
                    value={tokenAmount}
                    placeholder="Token Value"
                  />
                </label>
              </div>
            </div>
    </>
    )}
    <button onClick={buyTokens}>Buy Tokens</button>
    </div>
  )
}

export default Ethtoken