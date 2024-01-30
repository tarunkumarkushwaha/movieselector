import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Moviecard = ({ name, image, id }) => {
    return (
        <>
            <Link className="movie-card" to={`/movie?id=${id}`}>
                <img src={image} alt={name} />
                <div className="card-text">
                    <h3 className="card-title">{name}</h3>
                </div>
            </Link>
        </>
    )
}

Moviecard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number
}
export default Moviecard