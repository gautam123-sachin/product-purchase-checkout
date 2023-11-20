import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
} from '@mui/material';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email && password) {
      console.log('Login successful!');
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form>
          <Grid container spacing={2}>
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
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                }
                label="Remember Me"
              />
            </Grid>
            <Grid item xs={12}>
              <Link href="#" variant="body2" underline="none" style={{textDecoration: 'none'}}>
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ marginTop: 20 }}
          >
            Login
          </Button>
        </form>
        {error && (
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        )}
        <Grid container justifyContent="flex-end" style={{ marginTop: 10 }}>
          <Grid item>
            <Typography variant="body2" style={{ textDecoration: 'none' }}>
              Don't have an account?{' '}
              {/* <Link to="/signup" variant="body2" underline="none">
                Sign Up
              </Link> */}
              <MuiLink
                component={Link}
                to='/signup'
                color="inherit"
                variant="body2"
                style={{ marginRight: 20, textDecoration: "none" }}
              >
                 Sign Up
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
