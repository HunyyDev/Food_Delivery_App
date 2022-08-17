import {Component} from 'react';
import axios from 'axios';
import getRedirect from './redirectLink';

axios.defaults.baseURL = 'https://62f25ea8b1098f1508115e62.mockapi.io/';
``;
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
  static get(url, params, headers) {
    console.log('clicked');
    if (params == undefined)
      params = {
        id: '',
      };
    else if (params.id == undefined) params.id = '';
    return new Promise((resolve, reject) =>
      axios
        .get(url + '/' + params.id, {
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        })
        .then(response => {
          GetData(response).then(response => resolve(response));
        })
        .catch(err => reject(err)),
    );
  }
  static find(url, params, headers) {
    console.log(url);
    return new Promise((resolve, reject) =>
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        })
        .then(response => {
          GetData(response).then(response => resolve(response));
        })
        .catch(err => reject(err)),
    );
  }
}
