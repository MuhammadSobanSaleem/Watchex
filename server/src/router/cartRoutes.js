const express = require('express');
const { jwtAuth } = require('../middleware/loginAuth.js');
const Cart = require('../model/cartSchema.js');

const cartRouter = express.Router();

cartRouter.get('/', jwtAuth, async (req, res) => {
    try {
        const cartItems = await Cart.find({ userId: req.user.id });
        res.status(200).json(cartItems);

    }catch(error){
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
})

cartRouter.post('/add', jwtAuth, async (req, res) => {
    try{
        const { productId, quantity } = req.body;
        const userId = req.user.id;
        let cart = await Cart.findOne({ userId });
        if(!cart){ 
            cart = new Cart({ userId,
                products: [
                    { productId, quantity: quantity || 1 }
                ]
            });
        } else {
            const itemIndex = cart.products.findIndex(p => p.productId.toString() === productId);
            if(itemIndex > -1){
                cart.products[itemIndex].quantity += quantity || 1;
            } else {
                cart.products.push({ productId, quantity: quantity || 1 });
            }
        }

        await cart.save();
        res.json({ success: true, message: "Product added to cart", cart });
    }catch(error){
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
})

cartRouter.delete('/remove/:productId', jwtAuth, async (req, res) => {
    try{
        const userId = req.user.id;
        const { productId } = req.params;
        let cart = await Cart.findOne({ userId });
        if(!cart){
            return res.status(404).json({ error: 'Cart not found' });
        }

        const itemIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if(itemIndex > -1){
            cart.products.splice(itemIndex, 1);
            await cart.save();
            return res.json({ success: true, message: "Product removed from cart", cart });
        } else {
            return res.status(404).json({ error: 'Product not found in cart' });
        }
    }catch(error){
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
})

cartRouter.put('/update/:productId', jwtAuth, async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.params;
        const { quantity } = req.body;

        if (quantity <= 0) {
            return res.status(400).json({ error: "Quantity must be at least 1" });
        }

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        const itemIndex = cart.products.findIndex(p => p.productId.toString() === productId);

        if (itemIndex > -1) {
            // ✅ Update quantity
            cart.products[itemIndex].quantity = quantity;

            await cart.save();
            return res.json({ success: true, message: "Cart updated", cart });
        } else {
            return res.status(404).json({ error: 'Product not found in cart' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
});



module.exports = cartRouter;