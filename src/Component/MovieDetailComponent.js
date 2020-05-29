import React from 'react'

export default class MovieDetailComponent extends React.Component {
  render() {
    console.log(this.props.movie)

    return (
        <div className={'col-8'}>
          <img src={this.props.movie.Poster}/>
          <h2>{this.props.movie.Title}</h2>
          <p>Plot: {this.props.movie.Plot}</p>
          <h2>Runtime: {this.props.movie.Runtime}</h2>
        </div>
    )
  }
}