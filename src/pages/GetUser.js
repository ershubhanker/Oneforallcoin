import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/authreducer/action";
import Cookies from "js-cookie";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const GetUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { user, isLoading, token } = useSelector((store) => store.authReducer);
  const shared = Cookies.get("userTok");
  console.log(shared);
  useEffect(() => {
    dispatch(getUser(shared)).then(() => {
      navigate(location.state, { replace: true });
    });
  }, [dispatch, shared]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div style={{ marginTop: "120px" }}>
        {user?.data ? (
          <div>
            <h1>Name : {user.data.name}</h1>
            <h1>Username : {user.data.username}</h1>
            <h1>Age : {user.data.age}</h1>
            <h1>Email : {user.data.email}</h1>
            <p>Created on : {user.data.createdOn}</p>
            {/* Add more properties as needed */}
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </div>
    </>
  );
};

export default GetUser;
