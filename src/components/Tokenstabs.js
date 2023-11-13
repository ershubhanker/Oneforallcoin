import {
  Box,
  Tab,
  Tabs,
  Alert,
  AlertTitle,
  Button,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import Web3 from "web3";
import Ethtoken from "./Ethtoken";
import { useDispatch, useSelector } from "react-redux";
import { setEthAmount, setTokenAmount } from "../redux/calculateReducer/action";
import Usdtoken from "./Usdtoken";
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

const Tokenstabs = () => {
  const [value, setValue] = useState("one");
  const [web3, setWeb3] = useState(null);
  const [myContract, setMyContract] = useState(null);
  const [myTokensContract, setMyTokensContract] = useState(null);

  const [myUsdtcontract, setMyUsdtContract] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [open, setOpen] = useState(false);
  const { auth } = useSelector((store) => store.authReducer);


  const dispatch = useDispatch();

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

     
  
        const myUsdtInstance = new web3Instance.eth.Contract(
          myTokensABI,
          myUsdtAddress
        );

        setMyContract(myContractInstance);
        setMyTokensContract(myTokensInstance);
       
        setMyUsdtContract(myUsdtInstance);
        setIsConnected(true);
      });
    }
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const onDisconnect = () => {
    setIsConnected(false);
    dispatch(setEthAmount(""));
    dispatch(setTokenAmount(""));
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
    <Box sx={{ width: "100%" }}>
      <>
        {auth ? (
          <div>
            {!isConnected && (
              <div>
                <button onClick={onConnect}> Connect Wallet </button>
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
              <Tab value="one" label="Item One" />
              <Tab value="two" label="Item Two" />
            </Tabs>

            {value === "one" && (
              <div>
                {
                  <Ethtoken
                    myContract={myContract}
                    web3={web3}
                    myTokensContract={myTokensContract}
                    isConnected={isConnected}
                  />
                }
              </div>
            )}

            {value === "two" && (
              <div>
                {
                  <Usdtoken
                    myContract = {myContract}
                    web3={web3}
                    isConnected={isConnected}
                    myUsdtcontract={myUsdtcontract}
                  />
                }
              </div>
            )}

            <button
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
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

export default Tokenstabs;
