import { Component } from 'react';
import axios from 'axios';
import getRedirect from './redirectLink';

axios.defaults.baseURL = 'https://data.mongodb-api.com/app/data-lllra/endpoint/data/v1';

var APIkey = 'a89aCJTR7RsVPgkVGfeL7YM0n9cGYP2v05t9T5QBrboifqxoqszUSJbfVSGm9v9d'

const GetData = async response => {
  if (response.data.length == undefined) {
    await getRedirect(response.data.Pic1).then(
      url => (response.data.Pic1 = url),
    );
    getRedirect(response.data.Pic2).then(
      url => (response.data.Pic2 = url),
    );
    getRedirect(response.data.Pic3).then(
      url => (response.data.Pic3 = url),
    );
  } else {
    while (response.data.length > 10) {
      response.data.pop();
      console.log(response.data.length);
    }
    for (let index = 0; index < response.data.length; index++) {
      await getRedirect(response.data[index].Pic1).then(
        url => (response.data[index].Pic1 = url),
      );
      getRedirect(response.data[index].Pic2).then(
        url => (response.data[index].Pic2 = url),
      );
      getRedirect(response.data[index].Pic3).then(
        url => (response.data[index].Pic3 = url),
      );
    }
  }
  return response;
};

export default class APIUtils extends Component {
  static get(params, headers, uri = 'action/findOne') {
    return new Promise((resolve, reject) =>
      axios({
        method: 'post',
        url: uri,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': APIkey,
          ...headers
        },
        data: {
          "collection": "products",
          "database": "Food_Delivery_App",
          "dataSource": "Cluster0",
          "filter": params
        }
      })
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    );
  }
}
