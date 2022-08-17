import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://console.firebase.google.com/u/0/project/food-for-everyone-e506f/database/food-for-everyone-e506f-default-rtdb/data.json'
})

const Test = () => {
    api.get('/')
        .then(res => {
            console.log(res.data);
        })
    return (
        <Text>Hello</Text>
    )
}

export default Test;
