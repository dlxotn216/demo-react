/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";

class MyColorList extends Component {
    constructor(props) {
        super(props);
        this.colors = [];
        
        //this.refs는 deprecated 됨
        //아래와 같이 사용할 것
        //https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
        this.descriptionRef = React.createRef();
    }

    submit = (event) => {
        event.preventDefault();
        const {_title, _color} = this.refs;
        const newVar = {title: _title.value, color: _color.value, 
            description: this.descriptionRef.current.value};
        console.log(newVar); 
        this.colors = [
            ...this.colors,
            newVar
        ];
        
        _title.value = '';
        _color.value = '#000000';
        this.descriptionRef.current.value = '';
        this.descriptionRef.current.focus();
        // _title.focus();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input ref="_title" type="text" placeholder="색이름" required/>
                    <input ref="_color" type="color" required/>
                    <input ref={this.descriptionRef} type="text" />
                    <button>Add</button>
                </form>
                <ul>
                    {
                        this.colors.map(color =>
                            <li key={color.title}>{color.title}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default MyColorList;