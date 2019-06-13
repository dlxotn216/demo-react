/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Star from "../day03/Star";

//StarRating  컴포넌트의 경우엔 상태를 직접 관리함
//StarRatingPresentational 컴포넌트는 표현만 담당함
//안에서 상태를 변경하기 위한 동작은 call back을 전달받아 호출하고
//상태관리를 담당하는 상위 컴포넌트에서 집중관리하도록 함
class StarRatingPresentational extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        totalStars: PropTypes.number,
        starsSelected: PropTypes.number,
        onRating: PropTypes.func
    };

    static defaultProps = {
        totalStars: 0,
        starsSelected: 0,
        onRating: () => {
        }
    };

    render() {
        const {totalStars, starsSelected, onRating} = this.props;
        return (
            <div>
                <div className="star-rating">
                    {
                        [...new Array(totalStars)].map((n, i) =>
                            <Star key={i} selected={i < starsSelected}
                                  onClick={() => onRating(i + 1)}/>
                        )
                    }
                </div>
                <p>{starsSelected} / {totalStars}</p>
            </div>
        )
    }
}
export default StarRatingPresentational;