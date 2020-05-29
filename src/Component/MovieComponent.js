import React from 'react'

export default class MovieComponent extends React.Component{

  render(){
    return (
        <tr onClick={()=>this.props.renderDetial(this.props.movie.imdbID)}>
          <td><img height='200px' src={this.props.movie.Poster}/></td>
          <td>{this.props.movie.Title}</td>
          <td>{this.props.movie.Year}</td>
        </tr>
    )
  }
}