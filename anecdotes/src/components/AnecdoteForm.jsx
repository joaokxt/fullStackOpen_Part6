import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, zeroNotification } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()

        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        
        dispatch(createAnecdote(anecdote))
        dispatch(setNotification(`You created ${anecdote}`, 5))
    }

    return (
        <div>
            <h2>Create new</h2>
            <form onSubmit={add}>
                <div><input name='anecdote' /></div>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm