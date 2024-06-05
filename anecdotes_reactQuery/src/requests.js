import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => 
    axios.get(baseUrl).then(response => response.data)

export const createAnecdote = newAnecdote => {
    try {
        if(newAnecdote.content.length < 5) {
            throw new Error('Failed to create anecdote, it is too short!')
        }
        return axios.post(baseUrl, newAnecdote).then(response => response.data)
    } catch(exception) {
        throw exception
    }
}
    
    
export const updateAnecdote = updatedAnecdote => 
    axios.put(baseUrl + '/' + updatedAnecdote.id, updatedAnecdote)
