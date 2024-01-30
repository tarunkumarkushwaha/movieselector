import { useEffect, useState } from 'react'
import './App.css'
import Header from '../Components/Header'
import Moviecardcontainer from '../Components/Moviecardcontainer'

function App() {
  const [movielist, setmovielist] = useState(null)
  const [query, setQuery] = useState('')
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => {
        setmovielist(data)
    })
  }, [])
  
  return (
    <>
       <Header setQuery={setQuery}/>
       {movielist?<Moviecardcontainer query={query} movielist={movielist}/>:<div>Please wait</div>}
    </>
  )
}

export default App
