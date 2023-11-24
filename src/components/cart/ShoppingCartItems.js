import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MinusIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ShoppingCartItems = ({ cartItems, handleDecrement, handleIncrement, handleDelete }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="body1">Shopping cart</Typography>
      <Typography variant="body2">
        You have {cartItems.length} items in your cart
      </Typography>

      {/* Individual item */}
      {cartItems.map((item) => (
        <Card
          style={{ backgroundColor: "#d3cdc3", marginTop: "10px" }}
          key={item.id}
        >
          <CardContent>
            <Grid container justifyContent="space-between">
              <Grid container item xs={8} alignItems="center">
                <img
                  src={item.image}
                  className="img-fluid rounded-3"
                  alt="Shopping item"
                  style={{ width: "65px", borderRadius: "5px" }}
                />
                <div className="ms-3" style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h5"
                    style={{ fontSize: "20px" }}
                  >
                    {item.name}
                  </Typography>
                </div>
                <Typography
                  variant="h5"
                  className="fw-normal mb-0"
                  style={{ marginLeft: "70px", fontSize: "20px" }}
                >
                  <IconButton
                    onClick={() => handleDecrement(item.id)}
                  >
                    <MinusIcon />
                  </IconButton>
                  {item.quantity > 0 ? item.quantity : 0}
                  <IconButton
                    onClick={() => handleIncrement(item.id)}
                    style={{ fontSize: "20px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Typography>
              </Grid>
              <Grid container item xs={4} alignItems="center">
                <Typography
                  variant="h5"
                  className="mb-0"
                  style={{ width: "80px", fontSize: "20px" }}
                >
                 ${item.quantity > 0 ?Number((item.price * item.quantity).toFixed(2)): 0}
                </Typography>
                <DeleteOutlinedIcon
                  style={{ marginLeft: "60px", fontSize: "20px", cursor: "pointer" }}
                  onClick={() => handleDelete(item.id)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ShoppingCartItems;
