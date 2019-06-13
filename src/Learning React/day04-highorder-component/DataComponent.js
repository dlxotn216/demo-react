/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */
import React, {Component} from "react";
import fetch from "isomorphic-fetch";

/**
 * 데이터를 로딩하며 로드가 될 때 까지 Loading... 문자열을 보여주는 고차(High-order) 컴포넌트
 * 모든 고차 컴포넌트는 함수이다
 *
 * @param ComposedComponent 응답 값을 전달할 컴포넌트
 * @param url               api URL
 * @constructor
 */
const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loaded: false,
                loading: false
            };
        }

        componentWillMount() {
            this.setState({
                loading: true
            });

            fetch(url)
                .then(res => res.json())
                .then(result =>
                    this.setState({
                        loaded: true,
                        loading: false,
                        result
                    })
                )
        }

        render() {
            const {loading} = this.state;

            return (
                (loading) ?
                    <p>Loading...</p> :
                    <ComposedComponent {...this.state} {...this.props}/>
            );
        }
    };
export default DataComponent;