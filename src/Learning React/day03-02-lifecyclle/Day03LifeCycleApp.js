/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */

import React, {Component} from "react";
import MountingLifeCycle from "./MountingLifeCycle";
import UpdatingLifeCycle from "./UpdatingLifeCycle";

class Day03LifeCycleApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            child1: 0,
            child2: 0,
            child3: 0,
            child4: 0,
        };
    }

    updateChild(name){
        let {child1, child2, child3, child4} = this.state;

        if(name === 'child1'){
            child1++;
        } else if(name === 'child2'){
            child2++;
        } else if(name === 'child3'){
            child3++;
        } else if(name === 'child4'){
            child4++;
        }
        
        this.setState({
            child1,
            child2,
            child3,
            child4
        })
    }


    render() {
        return (
            <div>
                <h2>LifeCycle Test</h2>

                <MountingLifeCycle />
                <hr />
                <UpdatingLifeCycle
                    name="child1" onClick={()=>this.updateChild('child1')} count={this.state.child1}/>
                <UpdatingLifeCycle
                    name="child2" onClick={()=>this.updateChild('child2')} count={this.state.child2}/>
                <UpdatingLifeCycle
                    name="child3" onClick={()=>this.updateChild('child3')} count={this.state.child3}/>
                <UpdatingLifeCycle
                    name="child4" onClick={()=>this.updateChild('child4')} count={this.state.child4}/>
            </div>
        )
    }
}


export default Day03LifeCycleApp;