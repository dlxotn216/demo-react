/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

const ExpandableComponent = (ComposedComponent) =>
    class ExpandableComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                stateCollapsed: (props.collapsed && props.collapsed === true)
            };
            //state와 props를 함께 넘기므로 collapsed 키가 중복되어 제대로 동작하지 않을 수 있음
        }
        
        static propTypes = {
          collapsed: PropTypes.bool
        };
        
        static defaultProps = {
            collapsed: false
        };

        onToggle = (e) => {
            const stateCollapsed = !this.state.stateCollapsed;
            this.setState({stateCollapsed});
        };

        render() {
            return (
                <ComposedComponent
                    onToggle={this.onToggle}
                    {...this.state}
                    {...this.props}/>
            )
        }
    };
export default ExpandableComponent;