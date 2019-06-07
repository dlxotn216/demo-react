/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */
import React, {Component} from "react";
import fetch from "isomorphic-fetch";

class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            loaded: false,
            loading: false
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        
        fetch('https://randomuser.me/api?results=10')
            .then(res => res.json())
            .then(obj => obj.results)
            .then(data => this.setState({
                loaded: true,
                loading: false,
                people: data
            }))
    }

    render() {
        const {people, loading} = this.state;
        return (
            (loading) ?
                <div>loading...</div> :
                <ul>
                    {
                        people.map((person, i) => {
                            const {first, last} = person.name;
                            return <li key={i}>{first} {last}</li>
                        })
                    }
                </ul>
        )
    }
}

export default PeopleList;