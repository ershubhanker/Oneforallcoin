import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import {
  setEthAmount,
  setTokenAmount,
  setTokenAmountUsd,
  setUsdAmount,
} from "../redux/calculateReducer/action";
import {
  Box,
  Tab,
  Tabs,
  Alert,
  AlertTitle,
  Button,
  Snackbar,
} from "@mui/material";

const myContractABI = [
  {
    inputs: [
      { internalType: "address", name: "_tokenAddress", type: "address" },
      { internalType: "address", name: "_usdtAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "buyAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "referralReward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "timestamp",
        type: "uint32",
      },
      { indexed: false, internalType: "uint8", name: "buyType", type: "uint8" },
      {
        indexed: false,
        internalType: "address",
        name: "referralAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "BuyTokenDetail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "ETHORACLEADRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ETHOracle",
    outputs: [
      { internalType: "contract OracleWrapper", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDTAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDTORACLEADRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDTOracle",
    outputs: [
      { internalType: "contract OracleWrapper", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnableAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint8", name: "_type", type: "uint8" },
      { internalType: "address", name: "_referralAddress", type: "address" },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_tokenPrice", type: "uint256" },
      { internalType: "uint8", name: "_type", type: "uint8" },
    ],
    name: "calculateTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endDate",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isInvested",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomString",
    outputs: [{ internalType: "string", name: "referralCode", type: "string" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "receiverAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "referralCodeMapping",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenDecimals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenInstance",
    outputs: [
      { internalType: "contract IERC20Metadata", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPriceInPhaseOne",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPriceInPhaseSecond",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokensLeft",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_receiverAddress", type: "address" },
    ],
    name: "updateReceiverAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtInstance",
    outputs: [
      { internalType: "contract IERC20Metadata", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userVestingInfo",
    outputs: [
      { internalType: "uint256", name: "claimedAmount", type: "uint256" },
      { internalType: "uint256", name: "pendingAmount", type: "uint256" },
      { internalType: "bool", name: "isClaimed", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingInstance",
    outputs: [{ internalType: "contract IVesting", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingPeriod",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

const myTokensABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_TOKEN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const Ethcal = () => {
  const ethAmount = useSelector((state) => state.calculateReducer.ethAmount);
  const tokenAmount = useSelector(
    (state) => state.calculateReducer.tokenAmount
  );

  const usdAmount = useSelector((state) => state.calculateReducer.usdAmount);

  const tokenAmountUsd = useSelector(
    (state) => state.calculateReducer.tokenAmountUsd
  );
  const [value, setValue] = useState("one");
  const [web3, setWeb3] = useState(null);
  const [myContract, setMyContract] = useState(null);
  const [myTokensContract, setMyTokensContract] = useState(null);

  const [myUsdtcontract, setMyusdtcontract] = useState(null);
  const dispatch = useDispatch();

  const [isConnected, setIsConnected] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const { auth } = useSelector((store) => store.authReducer);

  const debounce = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // const contratadd = "0x20c383Efe2ba1F0FBDC73EAf5112d47FA22231Bc";
  const myContractAddress = "0x20c383Efe2ba1F0FBDC73EAf5112d47FA22231Bc";
  const myTokensAddress = "0x5376FC6c8201eE3f57dC50D328Ed969dB5954f67";
  const myUsdtAddress = "0x788a67Bf3f963bF8b8d0C14754f26670B4d2eB12";

  const onConnect = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      window.ethereum.enable().then(() => {
        // Initialize contracts with their addresses

        const myContractInstance = new web3Instance.eth.Contract(
          myContractABI,
          myContractAddress
        );
        const myTokensInstance = new web3Instance.eth.Contract(
          myTokensABI,
          myTokensAddress
        );

        const myusInstance = new web3Instance.eth.Contract(
          myContractABI,
          myContractAddress
        );

        const myUsdtInstance = new web3Instance.eth.Contract(
          myTokensABI,
          myUsdtAddress
        );

        setMyContract(myContractInstance);
        setMyTokensContract(myTokensInstance);
        setMyusdtcontract(myUsdtInstance);
        setIsConnected(true);
      });
    }else{
      alert("Metamask Is Not installed or available. Please install metamask in your device")
    }
  };

  const calculateTokenAmount = async () => {
    if (web3) {
      try {
        if (isNaN(ethAmount) || ethAmount.trim() === "") {
          // Check if the input is not a valid number or is empty
          console.log("Invalid Ethereum amount");
          return;
        }

        const ethAmountFloat = parseFloat(ethAmount);
        console.log(ethAmountFloat);
        console.log(typeof ethAmountFloat);

        const ethAmountWei = web3.utils.toWei(
          ethAmountFloat.toString(),
          "ether"
        );
        // console.log(ethAmountWei);
        const _type = 1;


        const endtime = await myContract.methods.endDate().call()
        // console.log(endtime)

        const currentTime = (parseInt(Date.now()/1000))

        let price;

        if(currentTime < endtime){
          price = await myContract.methods.tokenPriceInPhaseOne().call()
        }else{
          price = await myContract.methods.tokenPriceInPhaseSecond().call()
        }






        myContract.methods
          .calculateTokens(ethAmountWei, price , _type)
          .call()
          .then((result) => {
            dispatch(setTokenAmount(Number(result / (10**18)).toFixed(4))); // Update tokenAmount in Redux
            console.log(result)
          })
          .catch((error) => {
            console.log(error);
          }); // Update tokenAmount in Redux
      } catch (error) {
        console.log(error);
      }
    }
  };

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

        myContract.methods
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

  const debouncedCalculateTokenAmount = debounce(calculateTokenAmount, 100);
  const debouncedCalculateTokenAmountUsd = debounce(
    calculateTokenAmountUSD,
    100
  );

  useEffect(() => {
    // This effect will run whenever ethAmount changes
    debouncedCalculateTokenAmount(ethAmount);
  }, [ethAmount]);

  useEffect(() => {
    debouncedCalculateTokenAmountUsd(usdAmount);
  }, [usdAmount]);

  const buyTokens = async () => {
    if (web3 && myContract) {
      try {
        if (isNaN(ethAmount) || ethAmount.trim() === "") {
          // Check if the input is not a valid number or is empty
          console.log("Invalid Ethereum amount");
          return;
        }

        const ethAmountFloat = parseFloat(ethAmount);
        // console.log(ethAmountFloat);
        // console.log(typeof ethAmountFloat);
        // Assuming you have already calculated the ethAmount and _type
        const ethAmountWei = (ethAmountFloat * (10**18))
        const _type = 1;
        const referralAddress = "0x0000000000000000000000000000000000000000"; // Set the referral address if needed
        const accounts = await web3.eth.getAccounts();

        const userAddress = accounts[0];
        const userBalanceWei = await web3.eth.getBalance(userAddress);

        // Convert the user's balance to a float
        const userBalanceFloat = parseFloat(
          web3.utils.fromWei(userBalanceWei, "ether")
        );

        // if (userBalanceFloat < ethAmountFloat) {
        //   // Handle the case where the user doesn't have enough ETH
        //   alert("Not enough ethereum")
        //   return;
        // }
        // Call the buyTokens function
        await myContract.methods
          .buyTokens(ethAmountWei, _type, referralAddress)
          .send({ from: userAddress, value: ethAmountWei })
          .on("transactionHash", (hash) => {
            // Transaction sent, you can handle the transaction hash here
            console.log("Transaction Hash:", hash);
          })
          .on("receipt", (receipt) => {
            // Transaction confirmed, you can handle the receipt here
            console.log("Transaction Receipt:", receipt);
            // You may want to update your UI or dispatch an action to reflect the purchase.
          })
          .on("error", (error) => {
            // Handle any errors that occur during the transaction
            console.error("Transaction Error:", error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

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

        await myContract.methods
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

  const onDisconnect = () => {
    setIsConnected(false);
    dispatch(setEthAmount(""));
    dispatch(setTokenAmount(""));
    dispatch(setUsdAmount(""));
    dispatch(setTokenAmountUsd(""));
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    // <div>
    //   <>
    //     {auth ? (
    //       <div>
    //         {!isConnected && (
    //           <div>
    //             <button onClick={onConnect}> Connect Wallet </button>
    //           </div>
    //         )}
    //       </div>
    //     ) : (
    //       <div>
    //         {!isConnected && (
    //           <div>
    //             <button onClick={handleClick}>Connect Wallet</button>
    //             <Snackbar
    //               open={open}
    //               autoHideDuration={3000}
    //               onClose={handleClose}
    //             >
    //               <Alert
    //                 variant="filled"
    //                 onClose={handleClose}
    //                 severity="error"
    //               >
    //                 <AlertTitle>Error</AlertTitle>
    //                 Oops!! <strong>Login first to proceed </strong>
    //               </Alert>
    //             </Snackbar>
    //           </div>
    //         )}
    //       </div>
    //     )}

    //     {isConnected && (
    //       <>
    //         <div style={{ display: "flex", alignItems: "center" }}>
    //           <div style={{ width: "50%" }}>
    //             <label style={{ flex: "1", marginRight: "20px" }}>
    //               Ethereum:
    //               <input
    //                 type="number"
    //                 value={ethAmount}
    //                 placeholder="Ethereum Value"
    //                 onChange={(e) => {
    //                   const newValue = e.target.value;

    //                   console.log(newValue);
    //                   dispatch(setEthAmount(newValue));
    //                   console.log(ethAmount); // Dispatch action to update ethAmount
    //                 }}
    //                 min="0"
    //               />
    //             </label>
    //           </div>

    //           <div style={{ width: "50%" }}>
    //             <label style={{ flex: "1", marginRight: "20px" }}>
    //               OFA:
    //               <input
    //                 type="text"
    //                 style={{ caretColor: "transparent" }}
    //                 value={tokenAmount}
    //                 placeholder="Token Value"
    //               />
    //             </label>
    //           </div>
    //         </div>
    //         <div style={{ display: "flex", alignItems: "center" }}>
    //           <div style={{ width: "50%" }}>
    //             <label style={{ flex: "1", marginRight: "20px" }}>
    //               Ethereum:
    //               <input
    //                 type="number"
    //                 value={usdAmount}
    //                 placeholder="USDT Value"
    //                 onChange={(e) => {
    //                   const newValue = e.target.value;

    //                   console.log(newValue);
    //                   dispatch(setUsdAmount(newValue));
    //                   console.log(usdAmount); // Dispatch action to update ethAmount
    //                 }}
    //                 min="0"
    //               />
    //             </label>
    //           </div>

    //           <div style={{ width: "50%" }}>
    //             <label style={{ flex: "1", marginRight: "20px" }}>
    //               OFA:
    //               <input
    //                 type="text"
    //                 style={{ caretColor: "transparent" }}
    //                 value={tokenAmountUsd}
    //                 placeholder="Token Value"
    //               />
    //             </label>
    //           </div>
    //         </div>

    //         <button
    //           style={{
    //             backgroundColor: "#007bff",
    //             color: "#fff",
    //             padding: "10px 20px",
    //             border: "none",
    //             cursor: "pointer",
    //           }}
    //           onClick={onDisconnect}
    //         >
    //           Disconnect
    //         </button>

    //         <button onClick={buyTokensWithUsd}>Buy Tokens</button>
    //       </>
    //     )}
    //   </>
    // </div>

    <Box sx={{ width: "100%" }}>
      <>
        {auth ? (
          <div>
            {!isConnected && (
              <div>
                <button style={{borderRadius:"5px" , background:"green"}} onClick={onConnect}> Connect Wallet </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {!isConnected && (
              <div>
                <button onClick={handleClick}>Connect Wallet</button>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert
                    variant="filled"
                    onClose={handleClose}
                    severity="error"
                  >
                    <AlertTitle>Error</AlertTitle>
                    Oops!! <strong>Login first to proceed </strong>
                  </Alert>
                </Snackbar>
              </div>
            )}
          </div>
        )}

        {isConnected && (
          <>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="Ethereum" style={{ color: "white" , background:"none" }} />
              <Tab value="two" label="USDT" style={{ color: "white"  , background:"none" }} />
            </Tabs>
            <br />
            {value === "one" && (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "50%" }}>
                    <label
                      style={{ flex: "1", marginRight: "20px", color: "white" }}
                    >
                      Ethereum:
                      <input
                        type="number"
                        value={ethAmount}
                        placeholder="Ethereum Value"
                        onChange={(e) => {
                          const newValue = e.target.value;

                          console.log(newValue);
                          dispatch(setEthAmount(newValue));
                          console.log(ethAmount); // Dispatch action to update ethAmount
                        }}
                        min="0"
                      />
                    </label>
                  </div>

                  <div style={{ width: "50%" }}>
                    <label
                      style={{ flex: "1", marginRight: "20px", color: "white" }}
                    >
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
                <br />
                <button style={{ borderRadius:"5px" , marginRight:"20px" , background:"green" }} onClick={buyTokens}>Buy Tokens</button>
              </>
            )}

            {value === "two" && (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "50%" }}>
                    <label
                      style={{ flex: "1", marginRight: "20px", color: "white" }}
                    >
                      USDT:
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
                    <label
                      style={{ flex: "1", marginRight: "20px", color: "white" }}
                    >
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
                <br />
                <button style={{ borderRadius:"5px" , marginRight:"20px" , background:"green" }} onClick={buyTokensWithUsd}>Buy Tokens</button>
              </>
            )}

            <button
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                borderRadius:"5px",
                 background:"red"
              }}
              onClick={onDisconnect}
            >
              Disconnect
            </button>
          </>
        )}
      </>
    </Box>
  );
};

export default Ethcal;
