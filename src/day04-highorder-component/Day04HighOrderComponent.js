/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */

import React, {Component} from "react";
import PeopleList from "./PeopleList";
import DataComponent from "./DataComponent";
import ComposedPeopleList from "./ComposedPeopleList";
import ComposedCountryNames from "./ComposedCountryNames";
import ExpandableComponent from "./ExpandableComponent";
import ExpandableMessage from "./ExpandableMessage";

class Day04HighOrderComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const RandomPeople = 
            DataComponent(ComposedPeopleList, 'https://randomuser.me/api?results=10');
        const CountryNames = 
            DataComponent(ComposedCountryNames, 'https://restcountries.eu/rest/v2/all');
        const ToggleMessage = ExpandableComponent(ExpandableMessage);
        return (
            <div>
                <PeopleList />
                <hr/>
                <RandomPeople />
                <hr/>
                <CountryNames selected="Algeria" />
                <hr/>
                <ToggleMessage message="test message (click me)" collapsed={true} />
            </div>
        )
    }

}

export default Day04HighOrderComponent;