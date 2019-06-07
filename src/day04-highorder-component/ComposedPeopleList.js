/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */
import React, {Component} from "react";

const HighOrderPeopleList = ({result}) =>
    <ul>
        {
            result.results.map((person, i) => {
                const {first, last} = person.name;
                return <li key={i}>{first} {last}</li>;
            })
        }
    </ul>;

export default HighOrderPeopleList;