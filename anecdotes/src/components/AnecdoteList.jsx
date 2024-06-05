import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"

const Anecdote = ({ anecdote, handleButton }) => {
    return (
        <div key={anecdote.id}>
            <div>
                <strong>{anecdote.content}</strong>
            </div>
            <div>
                Has {anecdote.votes} votes <br></br>
                <button onClick={handleButton}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const checkMatch = (query, target) => {
        const upperTarget = target.toUpperCase()
        return upperTarget.includes(query)
    }

    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === '') {
            return anecdotes
        }

        return anecdotes.filter(anecdote => checkMatch(filter, anecdote.content))
    })
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote(id))
    }

    return (
        <div>
          <h2>Anecdotes</h2>
          {anecdotes.map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} handleButton={() => vote(anecdote.id)} />
          )}
          
        </div>
      )
}

export default AnecdoteList