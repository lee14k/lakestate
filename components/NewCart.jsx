import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { createCheckout } from '../utils/createCheckout';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  IconButton, 
  Typography, 
  List, 
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Box,
  TextField
} from '@mui/material';
import { 
  ShoppingBag as ShoppingBagIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon
} from '@mui/icons-material';

export default function NewCart() {
    const { 
      cartItems, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      getCartTotal 
    } = useCart();
    const [open, setOpen] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = async () => {
        try {
            setIsCheckingOut(true);
            const checkoutUrl = await createCheckout(cartItems);
            console.log("Checkout URL:", checkoutUrl);
            window.location.href = checkoutUrl;
        } catch (error) {
            console.error('Error during checkout:', error);
            // Handle the error appropriately
        } finally {
            setIsCheckingOut(false);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(parseFloat(price) || 0);
    };

    const cartTotal = formatPrice(getCartTotal());
    const itemCount = cartItems.reduce((count, item) => count + (item.quantity || 1), 0);

    return (
        <>
            <IconButton color="inherit" onClick={handleClickOpen}>
                <ShoppingBagIcon />
                <Typography variant="body2" color="inherit" sx={{ ml: 1 }}>
                    {itemCount}
                </Typography>
            </IconButton>
            <Dialog 
                open={open} 
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>
                    Shopping Cart
                    <Typography variant="subtitle1" color="text.secondary">
                        {itemCount} {itemCount === 1 ? 'item' : 'items'}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    {cartItems.length === 0 ? (
                        <Typography align="center" py={4}>
                            Your cart is empty
                        </Typography>
                    ) : (
                        <List>
                            {cartItems.map((item, index) => (
                                <React.Fragment key={`${item.id}-${item.variant?.id || 'default'}`}>
                                    {index > 0 && <Divider />}
                                    <ListItem alignItems="flex-start">
                                        <Box 
                                            sx={{ 
                                                display: 'flex', 
                                                width: '100%',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {/* Product Image */}
                                            <Box sx={{ width: 60, height: 60, mr: 2 }}>
                                                <img 
                                                    src={item.imageSrc || '/lakestatelogo.png'} 
                                                    alt={item.title}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </Box>
                                            
                                            {/* Product Details */}
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Typography variant="subtitle1">
                                                    {item.title}
                                                </Typography>
                                                {item.variant && (
                                                    <Typography variant="body2" color="text.secondary">
                                                        Variant: {item.variant.title}
                                                    </Typography>
                                                )}
                                                <Typography variant="body2">
                                                    {formatPrice(item.price)} each
                                                </Typography>
                                            </Box>
                                            
                                            {/* Quantity Controls */}
                                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                <IconButton 
                                                    size="small"
                                                    onClick={() => updateQuantity(
                                                        item.id, 
                                                        item.variant?.id, 
                                                        (item.quantity || 1) - 1
                                                    )}
                                                    disabled={(item.quantity || 1) <= 1}
                                                >
                                                    <RemoveIcon fontSize="small" />
                                                </IconButton>
                                                <TextField
                                                    size="small"
                                                    value={item.quantity || 1}
                                                    onChange={(e) => {
                                                        const val = parseInt(e.target.value);
                                                        if (!isNaN(val)) {
                                                            updateQuantity(item.id, item.variant?.id, val);
                                                        }
                                                    }}
                                                    inputProps={{ 
                                                        min: 1, 
                                                        style: { textAlign: 'center', width: '40px' } 
                                                    }}
                                                />
                                                <IconButton 
                                                    size="small"
                                                    onClick={() => updateQuantity(
                                                        item.id, 
                                                        item.variant?.id, 
                                                        (item.quantity || 1) + 1
                                                    )}
                                                >
                                                    <AddIcon fontSize="small" />
                                                </IconButton>
                                            </Box>
                                            
                                            {/* Item Total & Remove Button */}
                                            <Box sx={{ textAlign: 'right', minWidth: '80px' }}>
                                                <Typography variant="body1">
                                                    {formatPrice(parseFloat(item.price) * (item.quantity || 1))}
                                                </Typography>
                                                <IconButton 
                                                    edge="end" 
                                                    aria-label="delete"
                                                    onClick={() => removeFromCart(item.id, item.variant?.id)}
                                                    size="small"
                                                >
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </ListItem>
                                </React.Fragment>
                            ))}
                        </List>
                    )}
                    
                    {cartItems.length > 0 && (
                        <Box sx={{ mt: 2, textAlign: 'right' }}>
                            <Typography variant="h6">
                                Total: {cartTotal}
                            </Typography>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between', px: 3, py: 2 }}>
                    <Button 
                        onClick={() => {
                            clearCart();
                            handleClose();
                        }} 
                        color="error"
                        disabled={cartItems.length === 0 || isCheckingOut}
                    >
                        Clear Cart
                    </Button>
                    <Box>
                        <Button 
                            onClick={handleClose} 
                            color="secondary" 
                            sx={{ mr: 1 }}
                            disabled={isCheckingOut}
                        >
                            Close
                        </Button>
                        <Button 
                            onClick={handleCheckout} 
                            color="primary"
                            variant="contained"
                            disabled={cartItems.length === 0 || isCheckingOut}
                        >
                            {isCheckingOut ? 'Processing...' : 'Checkout'}
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    );
}
