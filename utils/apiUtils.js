import {Component} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://62f25ea8b1098f1508115e62.mockapi.io/';

export default class APIUtils extends Component {
  static get(url, params, headers) {
    //console.log('clicked');
    return new Promise((resolve, reject) =>
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        })
        .then(response => {
         // console.log(response.data);
          resolve(response);
        })
        .catch(err => reject(err)),
    );
  }
}
