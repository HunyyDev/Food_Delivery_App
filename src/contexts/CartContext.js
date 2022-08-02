
import React, { useState } from 'react';
import { Text, View } from 'react-native';

var MultiSet = require('mnemonist/multi-set');

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const itemList = new MultiSet();

    return (
        <CartContext.Provider value={itemList}>{children}</CartContext.Provider>
    )
}

export default CartProvider;
