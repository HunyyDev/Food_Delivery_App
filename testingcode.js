

import React from 'react';
import { Image, Text, View } from 'react-native';

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
            <Image
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/food-for-everyone-e506f.appspot.com/o/FoodDeliveryApp%20img%2Fimage%202.png?alt=media&token=685124e6-e88b-47d2-bc23-0285311c5556',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache'
                    },
                    body: 'Your Body goes here'
                }}
                style={{ width: 400, height: 400 }}
            />
        </View>
    )
};

export default Test;
