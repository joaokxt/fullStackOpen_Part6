import axios from 'axios'
import { updateAnecdote } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (anecdote) => {
    const object = {content: anecdote, votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (object) => {
    const modifiedObject = {
        ...object,
        votes: object.votes + 1
      }
    const response = await axios.put(baseUrl + '/' + object.id, modifiedObject)
    return response.data
}

export default { getAll, createNew, vote }