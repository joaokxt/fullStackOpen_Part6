import { createSlice, current } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'
import { applyMiddleware } from "redux"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateAnecdote(state, action) {
      const id = action.payload.id
      return state.map(a => a.id !== id ? a : action.payload).sort((anecdoteA, anecdoteB) => anecdoteB.votes - anecdoteA.votes)
    },
    appendAnecdote(state,action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { updateAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (object) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.vote(object)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer