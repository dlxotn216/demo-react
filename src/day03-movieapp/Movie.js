/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Movie.css";
import StarRatingPresentational from "./StarRatingPresentational";

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        rating: PropTypes.number,
        title: PropTypes.string.isRequired,
        onMovieRemove: PropTypes.func,
        onMovieRating: PropTypes.func
    };

    static defaultProps = {
        rating: 0
    };

    remove = (e) => {
        e.preventDefault();
        this.props.onMovieRemove();
    };

    rating = (rating) => {
        this.props.onMovieRating(rating);
    };

    render() {
        return (
            <div className="movie">
                <button onClick={this.remove}>삭제</button>
                <p>{this.props.title}</p>
                <StarRatingPresentational
                    totalStars={5}
                    starsSelected={this.props.rating}
                    onRating={(rating) => this.rating(rating)}
                />
            </div>
        )
    }
}

export default Movie;