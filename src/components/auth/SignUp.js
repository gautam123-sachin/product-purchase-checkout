import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../context/slices/authSlices";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    // Add your sign-up logic here
    // For simplicity, let's assume a successful sign-up if all fields are not empty
    if (firstName && lastName && email && password) {
      // Perform sign-up logic (e.g., API call, register user)
      console.log("Sign Up successful!");
    } else {
      console.log("Please fill out all fields.");
    }
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
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" align="center">
          Sign Up
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            style={{ marginTop: 20 }}
          >
            Sign Up
          </Button>
          <GoogleLogin
            clientId="707346013852-oh7c9opj9883ejgh713e4tvubaa5mk9n.apps.googleusercontent.com"
            buttonText="Sign Up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            // cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{ marginTop: 20 }}
              >
                Sign Up with Google
              </Button>
            )}
          />
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
