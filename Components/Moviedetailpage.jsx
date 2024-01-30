import { useEffect, useState } from 'react'
import Moviedetail from './Moviedetail'

const Moviedetailpage = () => {
  const [moviedata, setmoviedata] = useState(null)
  const movieid = new URLSearchParams(location.search).get('id')
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => {
        setmoviedata(data)
      })
  }, [])
  return (
    <>
      <div className="moviedetailpage">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {moviedata ? <Moviedetail movieid={movieid} moviedata={moviedata} /> : <div>Please wait</div>}
      </div>
    </>
  )
}

export default Moviedetailpage