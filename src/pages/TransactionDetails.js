import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/Transaction.css";
import { useWeb3React } from "@web3-react/core";
import Loading from "../components/Loading";
import { getBuyTokenDetails } from "../redux/authreducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const TransactionDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const { buyTokensDetails, isLoading, token, auth } = useSelector(
    (store) => store.authReducer
  );
  console.log(token);
  console.log(typeof buyTokensDetails);
  //   console.log(buyTokensDetails);
  const [currentPage, setCurrentPage] = useState(1);

  // const itemsPerPage = 10;
  // const totalItems = buyTokensDetails.data.totalDocs;
  // const totalPages = buyTokensDetails.data.totalPages;
  // console.log(totalItems)
  // console.log(totalPages)

  const [copiedItems, setCopiedItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCopyClick = (textToCopy, itemId) => {
    const hiddenInput = document.createElement("input");
    hiddenInput.value = textToCopy;
    document.body.appendChild(hiddenInput);
    hiddenInput.select();
    document.execCommand("copy");
    document.body.removeChild(hiddenInput);

    setCopiedItems([...copiedItems, itemId]);
    setTimeout(
      () => setCopiedItems(copiedItems.filter((item) => item !== itemId)),
      2000
    ); // Reset copied state after 2 seconds
  };

  useEffect(() => {
    const checkMetaMaskAddress = async () => {
      // Check if MetaMask is installed
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const currentAddress = accounts[0]; // Assign the value to the variable
          console.log("cuurr:", currentAddress);
          dispatch(
            getBuyTokenDetails({
              page: currentPage,
              limit: 10,
              userAddress: currentAddress,
            })
          ).then(() => {
            navigate(location.state, { replace: true });
          });
        } catch (error) {
          console.error("Error fetching MetaMask accounts:", error);
        }
      } else {
        console.error("MetaMask not installed");
      }
    };

    checkMetaMaskAddress();
  }, [dispatch, currentPage, location.state]);

  function shortenText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    // Shorten the text and append "..." at the end
    return text.substring(0, maxLength) + "...";
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="table-container">
        {buyTokensDetails &&
        buyTokensDetails.data &&
        buyTokensDetails.data.docs ? (
          <table>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Buyer Address</th>
                {/* Add other table headers as needed */}

                <th>Transaction Hash</th>
                <th>Buy Amount</th>
                <th>Buy Type</th>
                <th>Token Amount</th>
              </tr>
            </thead>
            <tbody>
              {buyTokensDetails.data.docs.map((filteredToken, index) => (
                <tr key={filteredToken._id}>
                  <td style={{ fontSize: "12px", color: "black" , textAlign : "center"}}>
                    {index + 1} {/* Serial number starting from 1 */}
                  </td>
                  <td style={{ fontSize: "12px", color: "black"  , textAlign : "center"}}>
                    {filteredToken.userAddress}
                  </td>
                  <td style={{ fontSize: "12px", color: "black" , textAlign : "center" }}>
                    {shortenText(filteredToken.transactionHash, 15)}
                    <span
                      onClick={() =>
                        handleCopyClick(
                          filteredToken.transactionHash,
                          filteredToken._id
                        )
                      }
                      className="copy-icon"
                      title="Copy to Clipboard"
                    >
                      {copiedItems.includes(filteredToken._id) ? (
                        <i className="fas fa-check-circle"></i>
                      ) : (
                        <i className="far fa-copy"></i>
                      )}
                    </span>
                  </td>

                  <td style={{ fontSize: "12px", color: "black" , textAlign : "center" }}>
                    {filteredToken.buyType === "2"
                      ? filteredToken.buyAmount / 10 ** 6
                      : filteredToken.buyAmount / 10 ** 18}
                  </td>
                  <td style={{ fontSize: "12px", color: "black" , textAlign : "center" }}>
                    {filteredToken.buyType === "2" ? "USDT" : "ETH"}
                  </td>
                  <td style={{ fontSize: "12px", color: "black" , textAlign : "center" }}>
                    {filteredToken.tokenAmount / 10 ** 18}
                  </td>
                  {/* Render other details in additional columns */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 style={{ marginTop: "20px" }}>No data available</h1>
        )}
      </div>

      <div className="pagination-container">
        <button
          style={{ borderRadius: "50px" , background:"none" , color:"black" }}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {buyTokensDetails &&
          buyTokensDetails.data &&
          buyTokensDetails.data.totalPages &&
          Array.from({ length: buyTokensDetails.data.totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
              style={{background:"white" , borderRadius:"5px" , color:"black"}}
            >
              {index + 1}
            </button>
          ))}

        <button
          style={{ borderRadius: "50px" , background:"none" , color:"black"}}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === (buyTokensDetails?.data?.totalPages || 0)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default TransactionDetails;
