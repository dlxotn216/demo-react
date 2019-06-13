/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */

import React from "react";
import MyDropdown from "./MyDropdown.js";
import MyColorList from "./MyColorList";
import StarRating from "./StarRating";

class Day03App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>No props</p>
                <MyDropdown />

                <p>Default label, Default value props</p>
                <MyDropdown
                    defaultLabel={'default label inject'}
                    defaultValue={'default value inject'} />

                <p>All props</p>
                <MyDropdown
                    defaultLabel={'default label inject'}
                    defaultValue={'default value inject'}
                    options={[
                        {label: 'opt1', value: 'opt1'},
                        {label: 'opt2', value: 'opt2'},
                        {label: 'opt3', value: 'opt3'},
                        {label: 'opt4', value: 'opt4'}
                    ]}/>
                <hr />
                
                <MyColorList />                
                <hr />
                
                <StarRating totalStars={5} />
                <hr />
                
                <StarRating totalStars={5} starsSelected={4} />
            </div>
        )
    }
}

export default Day03App;