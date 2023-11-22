import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [bankInfo, setBankInfo] = useState(null);

  const handleCardNumberChange = async (e) => {
    const newCardNumber = e.target.value;
    setCardNumber(newCardNumber);

    try {
      const response = await fetch(
        `https://api.apilayer.com/bincheck/${newCardNumber.slice(0, 6)}`,
        {
          method: "GET",
          headers: {
            apikey: "Elm8gqfDkbYVZtvN0NTV5uAs63EKBdos",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.text();

      console.log(result);

      const parsedResult = JSON.parse(result);
      console.log(parsedResult);
      setBankInfo(parsedResult);
    } catch (error) {
      console.error("Error fetching bank information:", error);
    }
  };
  console.log("bankInfo", bankInfo);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="typeName"
          label="Cardholder's Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="typeCardNumber"
          label="Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="typeExpiration"
          label="Expiration"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="typeCVV"
          label="CVV"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Grid>
    </Grid>
  );
};

export default CreditCardForm;
