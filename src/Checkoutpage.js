import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    TextField,
    Button, 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useCart, useCustomerInfo } from './CartContext';

function CheckoutPage() {
    const [localCustomerInfo, setLocalCustomerInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
    });



    const { cart } = useCart();
    const { dispatch } = useCustomerInfo();
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
        // Clear the error for the input field when a change is made
        setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;

        // Validate each input field
        const validationErrors = {
            firstName: !localCustomerInfo.firstName.trim(),
            lastName: !localCustomerInfo.lastName.trim(),
            email: !isValidEmail(localCustomerInfo.email),
            phone: !isValidPhone(localCustomerInfo.phone),
        };

        // Check if any validation errors exist
        for (const key in validationErrors) {
            if (validationErrors[key]) {
                hasError = true;
                setErrors((prevErrors) => ({ ...prevErrors, [key]: true }));
            }
        }

        if (hasError) {
            return; // Do not proceed if there are validation errors
        }

        const customerData = {
            firstName: localCustomerInfo.firstName,
            lastName: localCustomerInfo.lastName,
            email: localCustomerInfo.email,
            phone: localCustomerInfo.phone,
        };

        dispatch({ type: 'SET_CUSTOMER_INFO', payload: customerData });

         // Remove items from localStorage
         localStorage.clear();


        fetch('http://localhost:5000/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
        })
            .then((response) => {
                if (response.ok) {
                    navigate('/review');
                    
                } else {
                    console.log('Data submission failed.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // Validation function for email
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validation function for phone number
    const isValidPhone = (phone) => {
        const phoneRegex = /^\d{10}$/; // Change the regex pattern according to your requirements
        return phoneRegex.test(phone);
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <h2>Customer Information</h2>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={localCustomerInfo.firstName}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            style={{ marginBottom: '16px' }}
                            error={errors.firstName}
                        />

                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={localCustomerInfo.lastName}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            style={{ marginBottom: '16px' }}
                            error={errors.lastName}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={localCustomerInfo.email}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            style={{ marginBottom: '16px' }}
                            error={errors.email}
                        />
                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={localCustomerInfo.phone}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            style={{ marginBottom: '16px' }}
                            error={errors.phone}
                        />
                        <Button type="submit" variant="contained"
                            color="primary" style={{ marginBottom: '16px' }}
                            disabled={cart.length === 0}>
                            Submit
                        </Button>
                    </form>
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
            </Grid>
        </Container>
    );
}

export default CheckoutPage;
