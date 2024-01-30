import PropTypes from 'prop-types'
const Moviedetail  = ({moviedata,movieid}) => {
  let menu = moviedata.filter((data) => { return data.score == movieid })
return (
  <>
   <div className="movie-detail">
   <img src={menu[0].show.image ? menu[0].show.image.medium:"#"} alt={menu[0].show.name} />
  <h1>{menu[0].show.name}</h1>
  <b className='lang-padding'>{menu[0].show.language}</b>
  <div>{menu[0].show.summary.replace(/<\/p>|<\/b>|<p>|<b>/g,'')}</div>
   </div>
  </>
)
}
Moviedetail.propTypes = {
  moviedata: PropTypes.array,
  movieid: PropTypes.string,
}
export default Moviedetail