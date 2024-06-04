import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = (event) => {
        event.preventDefault()

        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnecdote(anecdote))
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