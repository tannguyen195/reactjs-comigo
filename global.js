
import axios from 'axios';
import CircularJSON from 'circular-json'
var https = require("https");
export const getDataInitial = (url, token) => {
    let header = {
        "Accept": "application/json"
    }
    if (token) {
        header = {
            'Authorization': "Bearer " + token,
            "Accept": "application/json",
        }
    }
    return axios({
        method: 'get',
        url: "https://dev.gotruckster.com/api/" + url,
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: header
    })
        .then(function (response) { 
            return response.data
        })
        .catch(function (response) {
            return null
        });
}

