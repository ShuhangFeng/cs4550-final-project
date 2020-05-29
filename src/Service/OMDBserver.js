const searchMovieByTitle = (title) =>
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=a9d9c03f`)
    .then(response => response.json())

const searchMovieByID = (id) =>
    fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=a9d9c03f`)
    .then(response => response.json())


export default {
  searchMovieByTitle,
  searchMovieByID
}


