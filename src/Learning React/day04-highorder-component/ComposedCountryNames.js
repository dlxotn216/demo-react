/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */
import React, {Component} from "react";

const HighOrderCountryNames = ({result, selected=''}) =>
    <select className="country-dropdown" defaultValue={selected}>
        {
            result.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)
        }
    </select>
;

export default HighOrderCountryNames;