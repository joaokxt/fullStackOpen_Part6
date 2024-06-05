import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])
  
  return (
    <>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </>
  )
}

export default App