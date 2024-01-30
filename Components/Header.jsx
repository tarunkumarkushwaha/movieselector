import PropTypes from 'prop-types'
export default function Header({setQuery}) {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          Movieselector
        </h2>
        <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search for a movie or show..."
      />
    </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  setQuery: PropTypes.func
}
