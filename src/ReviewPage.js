import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from '@mui/material';
import { useCart, useCustomerInfo } from './CartContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReviewPage() {
    const { customerInfo } = useCustomerInfo();
    const { cart, dispatch } = useCart();
    console.log(customerInfo);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleSubmitOrder = () => {

        setTimeout(() => {
            setOrderPlaced(true);

            toast("Your order has been successfully placed!")

            // Clear the cart after successful order placement
            dispatch({ type: 'CLEAR_CART' });

            //   // Clear the customer information
            dispatch({ type: 'CLEAR_CUSTOMER_INFO' });
        }, 2000);

    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4">Review and Submit Your Order</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>Customer Information</h2>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">
                            First Name: {customerInfo.firstName}
                        </Typography>
                        <Typography variant="h6">
                            Last Name: {customerInfo.lastName}
                        </Typography>
                        <Typography variant="h6">Email: {customerInfo.email}</Typography>
                        <Typography variant="h6">
                            Phone Number: {customerInfo.phone}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>Cart Items</h2>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Image</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell><img src={item.image} alt={item.name} width="50" height="50" /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    {orderPlaced ? (
                        <Typography variant="h6" style={{ color: 'green' }}>
                            <ToastContainer />
                        </Typography>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmitOrder}
                            disabled={cart.length === 0}
                        >
                            Submit Order
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ReviewPage;
