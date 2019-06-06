/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies
        }
    }

    static propTypes = {
        movies: PropTypes.array,
        onMovieListRemove: PropTypes.func,
        onMovieListRating: PropTypes.func
    };

    static defaultProps = {
        movies: []
    };

    movieRemove = (id) => {
        this.props.onMovieListRemove(id);
    };

    movieRating = (id, rating) => {
        this.props.onMovieListRating(id, rating);
    };

    render() {
        return (
            <div>
                {
                    this.props.movies.map((movie, i) =>
                        <Movie key={i} id={movie.id} rating={movie.rating}
                               title={movie.title}
                               onMovieRemove={() => this.movieRemove(movie.id)}
                               onMovieRating={(rating) => this.movieRating(movie.id, rating)}
                        />
                    )
                }
            </div>
        )
    }
}

export default MovieList;