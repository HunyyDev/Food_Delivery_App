const { Text } = require('react-native');
import React from 'react';

var axios = require('axios');

var doc;

axios({
    method: 'get',
    url: 'https://62f25ea8b1098f1508115e62.mockapi.io/product',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'a89aCJTR7RsVPgkVGfeL7YM0n9cGYP2v05t9T5QBrboifqxoqszUSJbfVSGm9v9d',
    },
})
    .then(res => {
        doc = res.data;
        var config = {
            method: 'post',
            url: 'https://data.mongodb-api.com/app/data-lllra/endpoint/data/v1/action/insertMany',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': 'a89aCJTR7RsVPgkVGfeL7YM0n9cGYP2v05t9T5QBrboifqxoqszUSJbfVSGm9v9d',
            },
            data: {
                "collection": "products",
                "database": "Food_Delivery_App",
                "dataSource": "Cluster0",
                "documents": doc
            }
        };
        axios(config)
            .then(function (response) {
                console.log('res from mongodb')
                console.log((response.data));
            })
            .catch(function (error) {

                console.log('error from mongodb')
                console.log(doc)
                console.log(2);
                console.log(error);
            });

    })
    .catch(error => {
        console.log(error)
    })

const Test = () => {

    return (
        <Text>render</Text>
    )
}

export default Test;

