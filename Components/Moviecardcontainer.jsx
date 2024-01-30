import PropTypes from 'prop-types'
import Moviecard from './Moviecard'

const Moviecardcontainer = ({ query, movielist }) => {
    return (
        <>
            <div className="movies-container">
                {movielist.filter((movie) =>
                        movie.show.name.toLowerCase().includes(query)
                    ).length == 0 ? "Not found":movielist.filter((movie) =>
                    movie.show.name.toLowerCase().includes(query)
                ).map((movie) => {
                        return (
                            <Moviecard key={movie.score}
                                id={movie.score}
                                name={movie.show.name}
                                image={movie.show.image ?movie.show.image.medium:"#"}
                            />
                        )
                    })}
            </div>
        </>
    )
}

Moviecardcontainer.propTypes = {
    query: PropTypes.string,
    movielist: PropTypes.array
  }
export default Moviecardcontainer