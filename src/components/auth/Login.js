import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { setUser } from "../../context/slices/authSlices";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const responseGoogle = (response) => {
    console.log(response);
    if (response.error === "popup_closed_by_user") {
      // Handle the case when the user closes the Google login popup
      console.log("Google login popup closed by user.");
    } else if (response.profileObj) {
      // Handle successful Google login
      dispatch(
        setUser({
          firstName: response.profileObj.givenName,
          lastName: response.profileObj.familyName,
          email: response.profileObj.email,
          googleId: response.profileObj.googleId,
          imageUrl: response.profileObj.imageUrl,
        })
      );

      // Redirect to the home page
      navigate("/");
    } else {
      // Handle other cases or errors
      console.log("Google login failed. User information not available.");
    }
  };

  return (
    <div className="box">
      <div className="login-bar">
        <div className="overlap">
          <div className="text-wrapper">Login In</div>
          <div className="email">
            <div>
              <TextField
                label="Email address"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="pass">
            <div>
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="sign-in">
            <div>
              <button
                className="div-wrapper"
                style={{
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#0000004c",
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="facebook">
            <img
              className="subtract"
              alt="Subtract"
              src="https://c.animaapp.com/H3Z2TodG/img/subtract.svg"
            />
          </div>

          <GoogleLogin
            clientId="707346013852-oh7c9opj9883ejgh713e4tvubaa5mk9n.apps.googleusercontent.com"
            buttonText="Sign Up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(renderProps) => (
              <img
                className="google"
                alt="Google"
                src="https://c.animaapp.com/H3Z2TodG/img/google.svg"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              />
            )}
          />
          <div className="text-wrapper-3">
            {" "}
            <MuiLink
              to="/signup"
              component={Link}
              style={{ textDecoration: "none" }}
            >
              Sign up
            </MuiLink>
          </div>
          <div className="text-wrapper-4">forget password</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
