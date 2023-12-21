import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import {
  setEthAmount,
  setRefAdd,
  setReferalCode,
  setTokenAmount,
  setTokenAmountUsd,
  setUsdAmount,
  setVestingCode,
} from "../redux/calculateReducer/action";
import {
  Box,
  Tab,
  Tabs,
  Alert,
  AlertTitle,
  Button,
  Snackbar,
  Modal,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import BigNumber from "bignumber.js";
import { useDisclosure } from "@chakra-ui/react";
import detectEthereumProvider from "@metamask/detect-provider";

const myContractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdtAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_burnableAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_reciverAddress",
        type: "address",
      },
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
      {
        indexed: false,
        internalType: "uint8",
        name: "buyType",
        type: "uint8",
      },
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
    name: "ETHOracle",
    outputs: [
      {
        internalType: "contract OracleWrapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDTORACLEADRESS",
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
    name: "USDTOracle",
    outputs: [
      {
        internalType: "contract OracleWrapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnableAddress",
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
    name: "burnablePercentage",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_referralAddress",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenPrice",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
    ],
    name: "calculateTokens",
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
    name: "claimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endDate",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "firstPhaseSellToken",
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
        name: "",
        type: "address",
      },
    ],
    name: "isInvested",
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
    name: "randomString",
    outputs: [
      {
        internalType: "string",
        name: "referralCode",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "receiverAddress",
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
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "referralCodeMapping",
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
    name: "referralPercentage",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenDecimals",
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
    name: "tokenInstance",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPriceInPhaseOne",
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
    name: "tokenPriceInPhaseSecond",
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
    name: "tokenToBeSold",
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
    name: "totalTokenSold",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burnablePercentage",
        type: "uint256",
      },
    ],
    name: "updateBurnablePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiverAddress",
        type: "address",
      },
    ],
    name: "updateReceiverAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_referralPercentage",
        type: "uint256",
      },
    ],
    name: "updateReferralPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_userPercentage",
        type: "uint256",
      },
    ],
    name: "updateUserPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_vestingPeriod",
        type: "uint32",
      },
    ],
    name: "updatevestingTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtInstance",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "userPercentage",
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
        name: "",
        type: "address",
      },
    ],
    name: "userVestingInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "claimedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pendingAmount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "buyTime",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "isClaimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingInstance",
    outputs: [
      {
        internalType: "contract IVesting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingPeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#20126f",
  border: "2px solid #20126f",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const Ethcal = () => {
  const ethAmount = useSelector((state) => state.calculateReducer.ethAmount);
  const tokenAmount = useSelector(
    (state) => state.calculateReducer.tokenAmount
  );

  const usdAmount = useSelector((state) => state.calculateReducer.usdAmount);

  const tokenAmountUsd = useSelector(
    (state) => state.calculateReducer.tokenAmountUsd
  );

  const referal = useSelector((state) => state.calculateReducer.referal);

  const refAdd = useSelector((state) => state.calculateReducer.refAdd);
  const vestingInfo = useSelector(
    (state) => state.calculateReducer.vestingCode
  );
  console.log(vestingInfo);

  const [value, setValue] = useState("one");
  const [web3, setWeb3] = useState(null);
  const [myContract, setMyContract] = useState(null);
  const [myTokensContract, setMyTokensContract] = useState(null);

  // /  const [TokenDecimal, setTokenDecimal] = useState(0);

  //   const [vestingperiod, setvestingPeriod] = useState(0);

  const [myUsdtcontract, setMyusdtcontract] = useState(null);

  const dispatch = useDispatch();

  const [isConnected, setIsConnected] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [transactionReceipt, setTransactionReceipt] = useState(null);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const { auth } = useSelector((store) => store.authReducer);

  const handleOpenDialog = (receipt) => {
    setTransactionReceipt(receipt);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setTransactionReceipt(null);
    setOpenDialog(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClosed = () => setOpen(false);

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
  const myContractAddress = "0x72709AEAc74b8Ca7A1C4412Cf6E6a6d33469B893";
  const myTokensAddress = "0xFf5a8A849E928C64e2675ec045628d2826ECCffB";
  const myUsdtAddress = "0x788a67Bf3f963bF8b8d0C14754f26670B4d2eB12";

  // const onConnect = async () => {
  //   if (window.ethereum) {
  //     const web3Instance = new Web3(window.ethereum);
  //     setWeb3(web3Instance);
  //     await window.ethereum.enable();

  //     const myContractInstance = new web3Instance.eth.Contract(
  //       myContractABI,
  //       myContractAddress
  //     );
  //     const myTokensInstance = new web3Instance.eth.Contract(
  //       myTokensABI,
  //       myTokensAddress
  //     );

  //     const myusInstance = new web3Instance.eth.Contract(
  //       myContractABI,
  //       myContractAddress
  //     );

  //     const myUsdtInstance = new web3Instance.eth.Contract(
  //       myTokensABI,
  //       myUsdtAddress
  //     );

  //     setMyContract(myContractInstance);
  //     console.log(myContract)
  //     setMyTokensContract(myTokensInstance);
  //     console.log(myTokensContract)
  //     setMyusdtcontract(myUsdtInstance);

  //     const acc = await web3Instance.eth.getAccounts();
  //     const add = acc[0];

  //     try {
  //       const refC = await myContractInstance.methods.isInvested(add).call();

  //       if (refC !== "") {
  //         dispatch(setReferalCode(refC));
  //       }
  //     } catch (error) {
  //       console.log("Error fetching referal Code", error);
  //     }

  //     setIsConnected(true);
  //   } else {
  //     alert(
  //       "Metamask Is Not installed or available. Please install metamask in your device"
  //     );
  //   }
  // };

  const onConnect = async () => {
    try {
      // Detect and connect to the available wallet provider (MetaMask in this case)
      const provider = await detectEthereumProvider();
      if (!provider) {
        throw new Error(
          "No wallet provider detected. Please install Metamask."
        );
      }
      const web3Instance = new Web3(provider);

      setWeb3(web3Instance);

      // Request user permission to access accounts
      await web3Instance.eth.requestAccounts();

      const acc = await web3Instance.eth.getAccounts();
      const add = acc[0];

      // Instantiate contract instances
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

      // Fetch and set referral code if available
      try {
        const refC = await myContractInstance.methods.isInvested(add).call();
        if (refC !== "") {
          dispatch(setReferalCode(refC));
        }
      } catch (error) {
        console.log("Error fetching referral Code", error);
      }

      setIsConnected(true);
    } catch (error) {
      console.error("Connection error:", error);
      alert(error.message);
    }
  };

  const calculateTokenAmount = async () => {
    if (web3) {
      try {
        if (isNaN(ethAmount) || ethAmount.trim() === "") {
          // Check if the input is not a valid number or is empty
          // console.log("Invalid Ethereum amount");
          return;
        }

        const ethAmountFloat = parseFloat(ethAmount);
        // console.log(ethAmountFloat);
        // console.log(typeof ethAmountFloat);

        const ethAmountWei = web3.utils.toWei(
          ethAmountFloat.toString(),
          "ether"
        );
        // console.log(ethAmountWei);
        const _type = 1;

        const endtime = await myContract.methods.endDate().call();
        // console.log(endtime)

        const currentTime = parseInt(Date.now() / 1000);

        let price;

        if (currentTime < endtime) {
          price = await myContract.methods.tokenPriceInPhaseOne().call();
        } else {
          price = await myContract.methods.tokenPriceInPhaseSecond().call();
        }

        myContract.methods
          .calculateTokens(ethAmountWei, price, _type)
          .call()
          .then((result) => {
            dispatch(setTokenAmount(Number(result / 10 ** 18).toFixed(4))); // Update tokenAmount in Redux
            // console.log(result);
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
          // console.log("Invalid USD amount");
          return;
        }

        // Replace with the actual exchange rate.
        const usdtAmount = parseFloat(usdAmount * 10 ** 6);

        const _type = 2;

        const endtime = await myContract.methods.endDate().call();
        // console.log(endtime)

        const currentTime = parseInt(Date.now() / 1000);

        let price;

        if (currentTime < endtime) {
          price = await myContract.methods.tokenPriceInPhaseOne().call();
        } else {
          price = await myContract.methods.tokenPriceInPhaseSecond().call();
        }

        console.log(price);

        myContract.methods
          .calculateTokens(usdtAmount, price, _type) // Assuming _type is 1 (buy)
          .call()
          .then((result) => {
            dispatch(setTokenAmountUsd((result / 10 ** 18).toFixed(4))); // Update tokenAmount in Redux
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

  // useEffect(() => {
  //   console.log("Updated refAdd:", refAdd);
  // }, [refAdd]);

  const buyTokens = async () => {
    if (web3 && myContract) {
      try {
        if (isNaN(ethAmount) || ethAmount.trim() === "") {
          // Check if the input is not a valid number or is empty
          // console.log("Invalid Ethereum amount");
          return;
        }

        const ethAmountBigNumber = new BigNumber(ethAmount);
        const ethAmountWei = ethAmountBigNumber
          .times(new BigNumber(10).pow(18))
          .toFixed();

        console.log("Referral Code in buyTokens:", refAdd);
        const _type = 1;
        let referralAddress = "0x0000000000000000000000000000000000000000"; // Set the referral address if needed
        const accounts = await web3.eth.getAccounts();

        const userAddress = accounts[0];
        const userBalanceWei = await web3.eth.getBalance(userAddress);

        // Convert the user's balance to a float
        const userBalanceFloat = parseFloat(
          web3.utils.fromWei(userBalanceWei, "ether")
        );

        if (refAdd) {
          // User provided a referral code, get the corresponding address
          try {
            referralAddress = await myContract.methods
              .referralCodeMapping(refAdd)
              .call();
            console.log(
              `Referral Address for Referral Code ${refAdd}: ${referralAddress}`
            );
          } catch (error) {
            console.error(
              `Error fetching referral address for code ${refAdd}:`,
              error
            );
          }
        }

        const isInvestedResult = await myContract.methods
          .isInvested(userAddress)
          .call();
        const referalCode = isInvestedResult.trim();

        if (referalCode === "") {
          await myContract.methods
            .buyTokens(ethAmountWei, _type, referralAddress)
            .send({ from: userAddress, value: ethAmountWei })
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
          dispatch(setReferalCode(referalCode));
        } else {
          dispatch(setReferalCode(referalCode));
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
              handleOpenDialog(receipt);
            })
            .on("error", (error) => {
              console.error("Transaction Error:", error);
            });
        }

        // if (userBalanceFloat < ethAmountFloat) {
        //   // Handle the case where the user doesn't have enough ETH
        //   alert("Not enough ethereum")
        //   return;
        // }
        // Call the buyTokens function
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
        let referralAddress = "0x0000000000000000000000000000000000000000"; // Set the referral address if needed
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        if (refAdd) {
          try {
            referralAddress = await myContract.methods
              .referralCodeMapping(refAdd)
              .call();
            console.log(
              `Referral Address for Referral Code ${refAdd}: ${referralAddress}`
            );
          } catch (error) {
            console.error(
              `Error fetching referral address for code ${refAdd}:`,
              error
            );
          }
        }

        const isInvestedResult = await myContract.methods
          .isInvested(userAddress)
          .call();
        const referalCode = isInvestedResult.trim();

        if (referalCode === "") {
          await myUsdtcontract.methods
            .approve(myContractAddress, usdtAmount)
            .send({ from: userAddress });
          //console.log(userAddress);

          console.log(referralAddress);

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
          dispatch(setReferalCode(referalCode));
        } else {
          dispatch(setReferalCode(referalCode));
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
              handleOpenDialog(receipt);
            })
            .on("error", (error) => {
              console.error("Transaction Error:", error);
            });
        }
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
    dispatch(setRefAdd(""));
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

  const userInfo = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      console.log("userAdd : ", userAddress);

      const result = await myContract.methods
        .userVestingInfo(userAddress)
        .call();

      console.log(result);

      // Assuming setVestingCode is a Redux action creator
      dispatch(setVestingCode(result));
    } catch (error) {
      console.log(error);
    }
  };

  const claimTokens = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      console.log("userAdd : ", userAddress);

      const result = await myContract.methods
        .claimTokens()
        .send({ from: userAddress });

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Call userInfo when the component is mounted or when the modal is opened
    if (open) {
      userInfo();
    }
  }, [open]);

  // const tokenDecimal = async () => {
  //   try {
  //     if (!myTokensContract || !myTokensContract.methods) {
  //       console.error("myTokensContract or its methods are not available");
  //       return;
  //     }

  //     const result = await myTokensContract.methods.decimals().call();
  //     setTokenDecimal(10 ** result);
  //     console.log("decimal", result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(()=>{
  //   tokenDecimal()
  // },[])

  return (
    <Box sx={{ width: "100%" }}>
      <>
        {auth ? (
          <div>
            {!isConnected && (
              <div>
                <button
                  style={{ borderRadius: "5px", background: "green" }}
                  onClick={onConnect}
                >
                  {" "}
                  Connect Wallet{" "}
                </button>
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
              <Tab
                value="one"
                label="Ethereum"
                style={{ color: "white", background: "none" }}
              />
              <Tab
                value="two"
                label="USDT"
                style={{ color: "white", background: "none" }}
              />
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

                          // console.log(newValue);
                          dispatch(setEthAmount(newValue)); // Dispatch action to update ethAmount
                          // console.log(ethAmount);
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
                <input
                  placeholder="Enter Referal Code"
                  value={refAdd}
                  onChange={(e) => {
                    const refval = e.target.value;
                    dispatch(setRefAdd(refval));
                  }}
                  style={{ width: "50%", marginTop: "20px" }}
                />
                <br />
                <button
                  style={{
                    borderRadius: "5px",
                    marginRight: "20px",
                    background: "#46AF46",
                    marginTop: "20px",
                  }}
                  onClick={buyTokens}
                >
                  Buy Tokens
                </button>

                <Dialog
                  PaperProps={{
                    style: {
                      backgroundColor: "#011B40",
                    },
                  }}
                  open={openDialog}
                  onClose={handleCloseDialog}
                >
                  <DialogTitle  style={{color: "white" }}>
                    Congratulations on purchase of the tokens!!
                  </DialogTitle>
                  
                  <DialogContent
                    style={{color: "white" }}
                  >
                    <h5 style={{color: "white" , borderBottom:"1px solid gray"}}>Transaction Details</h5>
                    {/* Display the transaction receipt details */}
                    {/* You can customize this based on your receipt structure */}
                    {transactionReceipt &&
                      transactionReceipt.events &&
                      transactionReceipt.events.BuyTokenDetail && (
                        <div>
                          <p>
                            Buy Amount:{" "}
                            {transactionReceipt.events.BuyTokenDetail
                              .returnValues.buyAmount /
                              10 ** 18}
                          </p>
                          <p>
                            Token Amount:{" "}
                            {transactionReceipt.events.BuyTokenDetail
                              .returnValues.tokenAmount /
                              10 ** 18}
                          </p>
                          <p>
                            Referral Reward:{" "}
                            {
                              transactionReceipt.events.BuyTokenDetail
                                .returnValues.referralReward
                            }
                          </p>

                          <p>
                            Buy Type:{" "}
                            {
                              transactionReceipt.events.BuyTokenDetail
                                .returnValues.buyType === "1" ? "ETH" : "USDT"
                            }
                          </p>

                          <p>
                            User Address:{" "}
                            {
                              transactionReceipt.events.BuyTokenDetail
                                .returnValues.userAddress
                            }
                          </p>
                        </div>
                      )}
                  </DialogContent>
                  <DialogActions>
                    <button style={{borderRadius : "5px" , background:"none"}} onClick={handleCloseDialog} color="primary">
                      Close
                    </button>
                  </DialogActions>
                </Dialog>
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

                          // console.log(newValue);
                          dispatch(setUsdAmount(newValue)); // Dispatch action to update ethAmount
                          // console.log(usdAmount);
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
                <input
                  placeholder="Enter Referal Code"
                  value={refAdd}
                  onChange={(e) => {
                    const refval = e.target.value;
                    dispatch(setRefAdd(refval));
                  }}
                  style={{ width: "50%", marginTop: "20px" }}
                />
                <br />
                <button
                  style={{
                    borderRadius: "5px",
                    marginRight: "20px",
                    background: "#46AF46",
                    marginTop: "20px",
                  }}
                  onClick={buyTokensWithUsd}
                >
                  Buy Tokens
                </button>

                <Dialog
                  PaperProps={{
                    style: {
                      backgroundColor: "#011B40",
                    },
                  }}
                  open={openDialog}
                  onClose={handleCloseDialog}
                >
                  <DialogTitle  style={{color: "white" }}>
                    Congratulations on purchase of the tokens!!
                  </DialogTitle>
                  
                  <DialogContent
                    style={{color: "white" }}
                  >
                    <h5 style={{color: "white" , borderBottom:"1px solid gray"}}>Transaction Details</h5>
                    {/* Display the transaction receipt details */}
                    {/* You can customize this based on your receipt structure */}
                    {transactionReceipt &&
                      transactionReceipt.events &&
                      transactionReceipt.events.BuyTokenDetail && (
                        <div>
                          <p>
                            Buy Amount:{" "}
                            {transactionReceipt.events.BuyTokenDetail
                              .returnValues.buyAmount /
                              10 ** 6}
                          </p>
                          <p>
                            Token Amount:{" "}
                            {transactionReceipt.events.BuyTokenDetail
                              .returnValues.tokenAmount /
                              10 ** 18}
                          </p>
                          <p>
                            Referral Reward:{" "}
                            {
                              transactionReceipt.events.BuyTokenDetail
                                .returnValues.referralReward
                            }
                          </p>

                          <p>
                            Buy Type:{" "}
                            {
                              transactionReceipt.events.BuyTokenDetail
                                .returnValues.buyType === "1" ? "ETH" : "USDT"
                            }
                          </p>

                          <p>
                            User Address:{" "}
                            {
                              transactionReceipt.events.BuyTokenDetail
                                .returnValues.userAddress
                            }
                          </p>
                        </div>
                      )}
                  </DialogContent>
                  <DialogActions>
                    <button style={{borderRadius : "5px" , background:"none"}} onClick={handleCloseDialog} color="primary">
                      Close
                    </button>
                  </DialogActions>
                </Dialog>
              </>
            )}

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <button
                style={{ borderRadius: "5px", background: "#20126f" }}
                onClick={handleOpen}
              >
                Claim tokens
              </button>
              <Modal
                open={open}
                onClose={handleClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    color="white"
                  >
                    Claim Details
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {vestingInfo && (
                      <>
                        <table>
                          <thead>
                            <tr>
                              <th>Claimed Amount</th>
                              <th>Is Claimed</th>
                              <th>Pending Amount</th>
                              <th>Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>{vestingInfo.claimedAmount / 10 ** 18}</td>
                              <td>
                                {vestingInfo.isClaimed ? "True" : "False"}
                              </td>
                              <td>{vestingInfo.pendingAmount / 10**18}</td>
                              <td
                                style={{
                                  cursor: "pointer",
                                  background: "red",
                                  color: "white",
                                }}
                                onClick={claimTokens}
                              >
                                Claim Tokens
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {/* <p>Buy Time: {vestingInfo.buyTime}</p>
                        <p>Claimed Amount: {vestingInfo.claimedAmount}</p>
                        <p>
                          IsClaimed: {vestingInfo.isClaimed ? "True" : "False"}
                        </p>
                        <p>pendingAmount: {vestingInfo.pendingAmount}</p>
                        Add other properties as needed */}
                      </>
                    )}
                  </Typography>
                </Box>
              </Modal>

              <button
                style={{
                  backgroundColor: "#EA4335",
                  color: "black",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                  background: "#DF5338",
                }}
                onClick={onDisconnect}
              >
                Disconnect
              </button>

              {/* <button onClick={tokenDecimal}>TOken</button> */}
            </div>

            <h6 style={{ marginTop: "20px", color: "white" }}>
              Your referal Code :{" "}
              <span style={{ color: "yellow" }}>{referal}</span>{" "}
            </h6>
          </>
        )}
      </>
    </Box>
  );
};

export default Ethcal;
