import React from 'react'
import services from '../Service/OMDBserver'
import MovieDetailComponent from './MovieDetailComponent'
import MovieComponent from './MovieComponent'

export default class MovieSearchComponent extends React.Component {

  state = {
    title: 'batman',
    movies: [],
    selectedMovie:{}
  }

  searchMovie = () => {
    services.searchMovieByTitle(this.state.title)
    .then(movies => this.setState({
      movies: movies.Search
    }))
  }

  updateTitleInState = (newTitle) => {
    this.setState(prevState => ({
          title: newTitle
        })
    )
  }

  renderDetial=(movieID)=>{
    services.searchMovieByID(movieID)
    .then(movieDetail =>
    this.setState({
      selectedMovie:movieDetail
    }))
  }

  render() {
    return (
        <div>
          <h1>Movie Search</h1>
          <h2>Title</h2>
          <input id={"movie"}
                 value={this.state.title}
                 onChange={(event) => this.updateTitleInState(
                     event.target.value)}/>
          <button onClick={this.searchMovie}>Search</button>

          <div className={'row'}>
            <div className={'col-4'}>
          <table className={'table'}>
            <thead>
            <tr>
              <td>Poster</td>
              <td>Title</td>
              <td>Year</td>
            </tr>
            </thead>
            <tbody>
            {
              this.state.movies.map(movie =>
                  <MovieComponent renderDetial={this.renderDetial}
                                  movie={movie}/>)
            }
            </tbody>
          </table>
            </div>
            <MovieDetailComponent movie={this.state.selectedMovie}/>

          </div>
        </div>
    )
  }
}