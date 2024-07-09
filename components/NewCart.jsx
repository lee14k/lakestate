import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { createCheckout } from '../utils/createCheckout';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, List, ListItem } from '@mui/material';
import { ShoppingBag as ShoppingBagIcon } from '@mui/icons-material';

export default function NewCart() {
    const { cartItems } = useCart();
    const [open, setOpen] = useState(false);

    const handleCheckout = async () => {
        try {
            const checkoutUrl = await createCheckout(cartItems);
            console.log("Checkout URL:", checkoutUrl);
            window.location.href = checkoutUrl;
        } catch (error) {
            console.error('Error during checkout:', error);
            // Handle the error appropriately
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton color="inherit" onClick={handleClickOpen}>
                <ShoppingBagIcon />
                <Typography variant="body2" color="inherit" sx={{ ml: 1 }}>
                    {cartItems.length}
                </Typography>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Shopping Cart</DialogTitle>
                <DialogContent dividers>
                    <List>
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                {item.title} - {item.price}
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                    <Button onClick={handleCheckout} color="primary">
                        Checkout
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
