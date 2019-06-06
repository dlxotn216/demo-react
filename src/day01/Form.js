/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-04
 */
import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            comment: '',
            type: 'type2'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        
        /*
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);       
        */

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    /*
    handleCommentChange(event) {
        this.setState({
            comment : event.target.value
        });
    }

    handleTypeChange(event) {
        this.setState({
            type : event.target.value
        });
    }  
    
    handleNameChange(event) {
        this.setState({
            name : event.target.value
        });
    }

    handleAgeChange(event){
        this.setState({
            age : event.target.value
        });
    }
    
    */

    handleSubmit(event) {
        event.preventDefault();
        console.log('submitted :', this.state);
    }
    
    /*
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name </label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label>age </label>
                    <input type="number" value={this.state.age} onChange={this.handleAgeChange}/>
                </div>
                <div>
                    <label>comment </label>
                    <textarea value={this.state.comment} onChange={this.handleCommentChange} />
                </div>
                <div>
                    <label>Types </label>
                    <select value={this.state.type} onChange={this.handleTypeChange}>
                        <option value="">default</option>
                        <option value="type1">Type1</option>
                        <option value="type2">Type2</option>
                        <option value="type3">Type3</option>
                    </select>
                </div>
                <input type='addMovie' value='Submit'/>
            </form>
        );
    }*/
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label>age </label>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label>comment </label>
                    <textarea value={this.state.comment} name="comment" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Types </label>
                    <select value={this.state.type} name="type" onChange={this.handleInputChange}>
                        <option value="">default</option>
                        <option value="type1">Type1</option>
                        <option value="type2">Type2</option>
                        <option value="type3">Type3</option>
                    </select>
                </div>
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}

export default Form;