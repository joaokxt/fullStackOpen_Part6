  import AnecdoteForm from './components/AnecdoteForm'
  import Notification from './components/Notification'

  import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
  import { getAnecdotes, updateAnecdote } from './requests'

  const App = () => {
    const queryClient = useQueryClient()

    const result = useQuery({
      queryKey: ['anecdotes'],
      queryFn: getAnecdotes,
      refetchOnWindowFocus: false
    })
    console.log(JSON.parse(JSON.stringify(result)))

    if(result.isLoading) {
      return <div>Loading data...</div>
    }

    if(result.isError) {
      return <div>Could not fetch anecdotes due to an error in the server</div>
    }

    const anecdotes = result.data

    const updateAnecdoteMutation = useMutation({
      mutationFn: updateAnecdote,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      }
    })

    const handleVote = (anecdote) => {
      const newAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      updateAnecdoteMutation.mutate(newAnecdote)
    }

    return (
      <div>
        <h3>Anecdote app</h3>
      
        <Notification />
        <AnecdoteForm />
      
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }

  export default App
