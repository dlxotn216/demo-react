/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */

import React, {Component} from "react";
import MovieList from "./MovieList";

class Day03MovieApp extends Component {
    constructor(props) {
        super(props);

        this.movieTitleRef = React.createRef();

        this.state = {
            movies: [],
            title: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };


    addMovie = (e) => {
        e.preventDefault();
        this.setState({
            title: '',
            movies: [
                ...this.state.movies,
                {
                    title: this.state.title,
                    id: Math.random()
                }
            ]
        });

        this.movieTitleRef.current.focus();
    };

    removeMovie = (id) => {
        this.setState({
            movies: this.state.movies.filter((movie) =>
                movie.id !== id
            )
        });
    };

    ratingMovie = (id, rating) => {
        this.setState({
            movies: this.state.movies.map(movie =>
                movie.id === id
                    ? {...movie, rating}
                    : movie
            )
        });
    };

    render() {
        return (
            <div>
                <form className="movieForm" onSubmit={this.addMovie}>
                    <input ref={this.movieTitleRef}
                           type="text" name="title" value={this.state.title}
                           onChange={this.handleInputChange}/>
                    <button>등록</button>
                </form>
                <MovieList movies={this.state.movies}
                           onMovieListRemove={ this.removeMovie}
                           onMovieListRating={this.ratingMovie}
                />
            </div>
        )
    }
}

export default Day03MovieApp;