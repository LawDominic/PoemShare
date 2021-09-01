import axios from 'axios';
const baseURL = '/api/poems'

const headers = {
    'bob': 'Bobalooba'
}
const getAll = () => {
    return axios.get(baseURL, {headers})
        .then (res => res.data)
}

const create = (newPoem) => {
    return axios.post(baseURL, newPoem, {headers})
        .then(res => res.data)
}

const del = (delPoem) => {
    return axios.delete(baseURL, delPoem, {headers})
        .then(res => res.data)
}

const upvote = (upvotePoem) => {
    return axios.post(baseURL + `/${upvotePoem}`, {}, {headers})
        .then(res => res.data)
}

const getVotes = (poemID) => {
    return axios.post(baseURL + `/${poemID}`, {}, {headers})
        .then(res => res.data)
}

const exports = {getAll, create, del, upvote, getVotes}

export default exports