import { Alert, AlertTitle, Button, Snackbar } from "@mui/material";

import React, { useState } from "react";

import { useSelector } from "react-redux";
import Web3 from "web3";
const Metamask = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalane] = useState("");
  const [accname, setAccname] = useState("");
  const [open, setOpen] = useState(false);
  const { auth } = useSelector((store) => store.authReducer);
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.curreProvider;
    } else {
      console.log("Non-etherum browser detected. You should install Metamask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();

      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];

        let ethBalance = await web3.eth.getBalance(account);
        setEthBalane(ethBalance);
        setAccname(userAccount.toString());
        console.log(accname.toString());

        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
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
    <>
      {auth ? (
        <div>
          {!isConnected && (
            <div>
              <button onClick={onConnect}> Login with metamask </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {!isConnected && (
            <div>
              <button onClick={handleClick}>Login with metamask</button>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert variant="filled" onClose={handleClose} severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Oops!! <strong>Login first to proceed </strong>
                </Alert>
              </Snackbar>
            </div>
          )}
        </div>
      )}

      {isConnected && (
        <div>
          <h5 style={{ color: "green" }}>You are connected to metamask</h5>
          <span style={{ color: "green" }}>
            AccountID :{" "}
            {accname.length > 10 ? `${accname.substring(0, 10)}...` : accname}{" "}
          </span>
          <br />
          <span style={{ color: "white" }}>
            Balance :{" "}
            {ethBalance == 0 ? "You dont have enough etherium" : ethBalance}{" "}
          </span>
          <br />
          <button onClick={onDisconnect}>Disconnect</button>
        </div>
      )}
    </>
  );
};

export default Metamask;
