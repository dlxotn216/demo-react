/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */
import React, {Component} from "react";
import fetch from "isomorphic-fetch";

class Day04FetchApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        /* https://restcountries.eu/#api-endpoints-all */
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(json => json.map(country => country.name))
            .then(countryNames =>
                this.setState({loading: false, countryNames}));
    }

    render() {
        const {loading, countryNames} = this.state;

        return (
            (loading) ?
                <div>loading...</div>
                :
                (!countryNames.length) ?
                    <div>나라이름이 없습니다</div>
                    :
                    <ul>
                        {
                            countryNames.map((name, i) =>
                                <li key={i}>{name}</li>
                            )
                        }
                    </ul>
        )
    }
}

export default Day04FetchApp;