import React, { Component } from 'react';
import './MyComponent.css'
class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1

        }

        // this.props will have values for  a,b for first time
        //But when component of same instance is called for 2nd time, constructor wont be called.
        alert(JSON.stringify(this.props))

    }
    handleClick(argument) {
        alert("Argument received", argument);
        this.setState({
            count: this.state.count+1, argument: argument
        })
    }
    componentWillReceiveProps(nextProps) {
        //But when component of same instance is called for 2nd time, constructor wont be called.

        //Then how.
        //This is a React Life Cycle method which will be called in that case and there we have to capture those.

        alert(JSON.stringify(nextProps))
        this.setState({
            valueInChild: nextProps.textFromParent ?
                nextProps.textFromParent + "......Yes.But you are seeing from Child." :"" })
    }
    render() {
        return (
            <div style={{border:"2px dotted black"}}>
                I am an image
                 <br></br>
                Value for A : {this.props.a} {"          "}
                <br></br>
                Value for B:
                {this.props.b} {"          "}
                <br></br>
                <div className="joyfull">
                    {this.state.valueInChild}
                </div>

                <button onClick={this.handleClick.bind(this, "Sample")}>{this.state.count}</button>
            </div>
        )
    }
}

export default MyComponent;