

import React from 'react';
import { Text, View } from 'react-native';

const Test = () => {
    const array = [];
    array.push({ picture: 'food picture', name: 'food', price: '1900', detail: 'something' })
    const getInfo = (index) => {
        return (
            <>
                <Text>Name: {array[index].name}</Text>
                <Text>Price: {array[index].price}</Text>
                <Text>Detail: {array[index].detail}</Text>
            </>
        )
    }

    return (
        <View>
            {getInfo(0)}
        </View>
    )
};

export default Test;
