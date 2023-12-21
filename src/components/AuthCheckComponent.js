// AuthCheckComponent.js
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import Cookies from "js-cookie";
import { restoreAuth } from "../redux/authreducer/action";

const AuthCheckComponent = ({ restoreAuth }) => {
  useEffect(() => {
    const storedAuthToken = Cookies.get("userTok");
    console.log(storedAuthToken)
    if (storedAuthToken) {
      restoreAuth(storedAuthToken);
    }
  }, [restoreAuth]);

  return null; // You can render something meaningful if needed
};

const mapDispatchToProps = {
  restoreAuth,
};

export default connect(null, mapDispatchToProps)(AuthCheckComponent);
