
import axios from 'axios'
export const request = (payload) => {

    const config = {
        url: endPoint + payload.url,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Accept": 'application/json', },
        ...payload.options,
    }
    return axios(config).then((response) => {
        response.data
    })
}
