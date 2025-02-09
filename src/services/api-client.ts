import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '46e6d4e6fb054cc8b57e015ce40ca317'
    }
})