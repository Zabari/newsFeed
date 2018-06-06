import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.renderNoName=this.renderNoName.bind(this);
  }
  handleChange(event){
    event.preventDefault();
    const name=event.target.value;
    this.setState({tempName:name});
}
  handleSubmit(event){
    event.preventDefault();
    this.setState({name:this.state.tempName});
  }
  renderNoName(){
    return (
      <div>
      Please enter your name:
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type="text"/>
      </form>
      </div>
    );
  }
  render() {
    if (!this.state.name){
      return this.renderNoName();
    }
    return (
      <div className="App">
        <Card proPic="la.jpg" text="hey it's me" name="G" userName={this.state.name} />
      </div>
    );
  }
}

export default App;
