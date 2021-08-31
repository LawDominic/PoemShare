import axios from 'axios';
const baseURL = 'http://localhost:3001/api/poems'

const headers = {
    'bob': 'Bobalooba'
}
const getAll = () => {
    return axios.get(baseURL, {headers})
        .then (res => res.data)
}

const create = (newPoem) => {
    console.log(newPoem);
    return axios.post(baseURL, newPoem, {headers})
        .then(res => res.data)
}

const del = (delPoem) => {
    return axios.delete(baseURL, delPoem, {headers})
        .then(res => res.data)
}

const upvote = (upvotePoem) => {
    return axios.post(baseURL + `/${upvotePoem}`, {}, {headers})
        .then(res => console.log(res))
}

const exports = {getAll, create, del, upvote}

export default exports