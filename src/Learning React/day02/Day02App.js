import React from "react";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import DatePicker from "./DatePicker";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    root: {
        flexGrow: 1,
        height: 250,
    },
    divider: {
        height: 16,
    }
}

class Day02App extends React.Component {

    constructor(props) {
        super(props);

        this.classes = {
            root: 'root',
            divider: 'divider'
        };

        this.state = {
            selectedValue: [],
            suggestions: []
        };

        setTimeout(() => {
            let suggestions = [
                {label: 'Afghanistan'},
                {label: 'Aland Islands'},
                {label: 'Albania'},
                {label: 'Algeria'},
                {label: 'American Samoa'},
                {label: 'Andorra'},
                {label: 'Angola'},
                {label: 'Anguilla'},
                {label: 'Antarctica'},
                {label: 'Antigua and Barbuda'},
                {label: 'Argentina'},
                {label: 'Armenia'},
                {label: 'Aruba'},
                {label: 'Australia'},
                {label: 'Austria'},
                {label: 'Azerbaijan'},
                {label: 'Bahamas'},
                {label: 'Bahrain'},
                {label: 'Bangladesh'},
                {label: 'Barbados'},
                {label: 'Belarus'},
                {label: 'Belgium'},
                {label: 'Belize'},
                {label: 'Benin'},
                {label: 'Bermuda'},
                {label: 'Bhutan'},
                {label: 'Bolivia, Plurinational State of'},
                {label: 'Bonaire, Sint Eustatius and Saba'},
                {label: 'Bosnia and Herzegovina'},
                {label: 'Botswana'},
                {label: 'Bouvet Island'},
                {label: 'Brazil'},
                {label: 'British Indian Ocean Territory'},
                {label: 'Brunei Darussalam'},
            ].map((suggestion, i) => ({
                key: i,
                value: suggestion.label,
                label: suggestion.label,
            }));
            this.setState({
                suggestions: suggestions,
                selectedValue: suggestions[0]
            })
        }, 1000);
    }


    render() {
        return (
            <div className={this.props.classes.root}>
                <SingleSelect />
                <div className={this.props.classes.divider}/>
                <MultiSelect suggestions={this.state.suggestions}
                             selectedValue={this.state.selectedValue}
                             
                />
                <div className={this.props.classes.divider}/>
                <DatePicker />
            </div>
        );
    }
}

export default withStyles(styles)(Day02App);