import React, { useEffect, useState } from "react";
import { TextField, Grid } from "@mui/material";
import { userCardInfo } from "../../context/slices/cartSlice";
import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";

const CreditCardForm = ({ errors }) => {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setCardInfo({ ...cardInfo, name: newName });
  };
  const handleCardNumberChange = (e) => {
    let newCardNumber = e.target.value;
    newCardNumber = newCardNumber.slice(0, 16);
    setCardInfo({ ...cardInfo, number: newCardNumber });
  };

  const handleExpiryChange = (e) => {
    const newExpiry = e.target.value;
    setCardInfo({ ...cardInfo, expiry: newExpiry });
  };

  const handleCvcChange = (e) => {
    const newCvc = e.target.value;
    setCardInfo({ ...cardInfo, cvc: newCvc });
  };

  useEffect(() => {
    dispatch(userCardInfo(cardInfo));
  }, [cardInfo, dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="typeName"
          label="Cardholder's Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cardInfo.name}
          onChange={handleNameChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="typeCardNumber"
          label="Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cardInfo.number}
          onChange={handleCardNumberChange}
          error={Boolean(errors.number)}
          helperText={errors.number}
          inputComponent={InputMask}
          inputProps={{ mask: "9999 9999 9999 9999" }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="typeExpiration"
          label="Expiration"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cardInfo.expiry}
          onChange={handleExpiryChange}
          error={Boolean(errors.expiry)}
          helperText={errors.expiry}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="typeCVV"
          label="CVV"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cardInfo.cvc}
          onChange={handleCvcChange}
          error={Boolean(errors.cvc)}
          helperText={errors.cvc}
        />
      </Grid>
    </Grid>
  );
};

export default CreditCardForm;
