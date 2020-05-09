import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import MyComponent from './Components/MyComponent'
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text1: "one",
			count: 0,
		}
	}
	handleCounter() {
		this.setState({ count: this.state.count + 1, sampleParam: "I am a guest" })
	}
	handleClick() {
		this.setState({ textFromParent: "I am comming from parent" })
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
					<div onClick={this.handleCounter.bind(this)}>{this.state.count}
						{this.state.sampleParam}
					</div>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload. </p>
				<div>
					<button onClick={this.handleClick.bind(this)}>
						Click parent to see change in child</button>
					<MyComponent a={10} b={21} textFromParent={this.state.textFromParent} />
					<MyComponent />
					<MyComponent />
				</div>
			</div>
		);
	}
}
export default App;
