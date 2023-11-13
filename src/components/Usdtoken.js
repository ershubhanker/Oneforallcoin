import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTokenAmountUsd, setUsdAmount } from "../redux/calculateReducer/action";

const Usdtoken = (web3, myusdContract , myUsdtcontract, isConnected) => {
  const usdAmount = useSelector((state) => state.calculateReducer.usdAmount);

  const tokenAmountUsd = useSelector(
    (state) => state.calculateReducer.tokenAmountUsd
  );
  const dispatch = useDispatch();

  const debounce = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const myContractAddress = "0x20c383Efe2ba1F0FBDC73EAf5112d47FA22231Bc";

  const calculateTokenAmountUSD = async () => {
    if (web3) {
      try {
        if (isNaN(usdAmount) || usdAmount.trim() === "") {
          // Check if the USD input is not a valid number or is empty
          console.log("Invalid USD amount");
          return;
        }

        const usdToUsdtExchangeRate = 1; // Replace with the actual exchange rate.
        const usdtAmount = parseFloat(usdAmount) / usdToUsdtExchangeRate;

        myusdContract.methods
          .calculateTokens(web3.utils.toWei(usdtAmount.toString()), 1, 2) // Assuming _type is 1 (buy)
          .call()
          .then((result) => {
            dispatch(
              setTokenAmountUsd(Number(result).toFixed(3).substring(0, 4))
            ); // Update tokenAmount in Redux
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const debouncedCalculateTokenAmountUsd = debounce(
    calculateTokenAmountUSD,
    100
  );

  useEffect(() => {
    debouncedCalculateTokenAmountUsd(usdAmount);
  }, [usdAmount]);

  const buyTokensWithUsd = async () => {
    if (web3) {
      try {
        if (
          isNaN(usdAmount) ||
          usdAmount.trim() === "" ||
          parseFloat(usdAmount) <= 0
        ) {
          console.log("Invalid USD amount");
          return;
        }

        const usdtaAmount = parseFloat(usdAmount); // Parse the user's input as a float
        const usdtToUsdExchangeRate = 1000000; // Replace with the actual exchange rate
        const usdtAmount = usdtaAmount * usdtToUsdExchangeRate; // Convert USD to USDT

        const _type = 2; // Assuming _type is 2 (buy with USDT)
        const referralAddress = "0x0000000000000000000000000000000000000000"; // Set the referral address if needed
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        await myUsdtcontract.methods
          .approve(myContractAddress, usdtAmount)
          .send({ from: userAddress });
        //console.log(userAddress);

        await myusdContract.methods
          .buyTokens(usdtAmount, _type, referralAddress)
          .send({ from: userAddress })
          .on("transactionHash", (hash) => {
            console.log("Transaction Hash:", hash);
          })
          .on("receipt", (receipt) => {
            console.log("Transaction Receipt:", receipt);
            // You may want to update your UI or dispatch an action to reflect the purchase.
          })
          .on("error", (error) => {
            console.error("Transaction Error:", error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
   
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "50%" }}>
              <label style={{ flex: "1", marginRight: "20px" }}>
                Ethereum:
                <input
                  type="number"
                  value={usdAmount}
                  placeholder="USDT Value"
                  onChange={(e) => {
                    const newValue = e.target.value;

                    console.log(newValue);
                    dispatch(setUsdAmount(newValue));
                    console.log(usdAmount); // Dispatch action to update ethAmount
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
                  value={tokenAmountUsd}
                  placeholder="Token Value"
                />
              </label>
            </div>
          </div>
        </>
      
    </div>
  );
};

export default Usdtoken;
