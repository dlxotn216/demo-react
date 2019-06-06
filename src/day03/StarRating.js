/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Star from "./Star";

class StarRating extends Component {
    constructor(props) {
        super(props);
        //동작 함. 단, setState는 사용 불가
        this.state = {
            starsSelected: this.props.starsSelected
        };
    }

    static propTypes = {
        totalStars: PropTypes.number,
        starsSelected: PropTypes.number,
        onRating: PropTypes.func
    };

    static defaultProps = {
        totalStars: 0,
        starsSelected: 0,
        onRating: () => {}
    };

    //Component가 마운트 될 때 단 한 번 호출되는 라이프사이클 
    componentWillMount() {
        const {starsSelected} = this.props;
        this.setState({
            starsSelected
        });
    }

    change = (starsSelected) => {
        this.setState({starsSelected});
        this.props.onRating();
    };

    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        return (
            <div>
                <div className="star-rating">
                    {
                        [...new Array(totalStars)].map((n, i) =>
                            <Star key={i} selected={i < starsSelected}
                                  onClick={() => this.change(i + 1)}/>
                        )
                    }
                </div>
                <p>{starsSelected} / {totalStars}</p>
            </div>
        )
    }
}
export default StarRating;