import React, { Component } from 'react';
import './App.css';
import dog1 from './dog.jpg'
import dog2 from './dog1.jpeg'
import Card from './Card.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      cards:[],
      sortedCards: [],
      tempName:"",
      sorted:false
    };

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.renderNoName=this.renderNoName.bind(this);
    this.handleSorted=this.handleSorted.bind(this);
    this.sortRender=this.sortRender.bind(this);
  }
  handleChange(event){
    event.preventDefault();
    const name=event.target.value;
    this.setState({tempName:name});
}
  handleSubmit(event){
    event.preventDefault();
    let x=1;
    const c1={card:(<Card name="Aaron" pic={dog1} text="Hey it's me Aaron! Look at this sick pic of my dog!" userName={this.state.tempName} time={x} />),time:x};
    x=2;
    const c2={card:(<Card name="Greg" pic={dog2} text="Hey everyone, wonderful day outside. Here's a photograph of my dog." userName={this.state.tempName} time={x} />),time:x};

    let newCards=[];
    newCards.push(c2);
    newCards.push(c1);
    //console.log(newCards);
    this.setState({cards:newCards});
    this.setState({name:this.state.tempName});

  }
  renderNoName(){
    return (
      <div className="login">
      Please enter your name:
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type="text"/>
      </form>
      </div>
    );
  }
  handleSorted(){
    const x=this.state.sorted;
    this.setState({sorted:!x});
  }
  sortRender(){
    let newArr=this.state.cards.slice();
    console.log(newArr);
    // newArr.sort((item1,item2)=> item1.time-item2.time);
    // newArr=newArr.map((item,i)=> <li key={i}> {item.card}</li>);
    //
    //   return (
    //     <div>
    //     {newArr}
    //     </div>
    //   );

    if (this.state.sorted){
      //let y=newArr[0];
      newArr.sort((item1,item2)=> item1.time-item2.time);
      //console.log(newArr);
      //newArr=[newArr[1],newArr[0]];
      //console.log(newArr);
      //let x=newArr.map((item,i)=> (<li key={i}> {item.card}</li>));
      newArr=newArr.map((item,i)=> <li key={i}> {item.card}</li>);
      //console.log(newArr);
      //this.setState({sorted:this.state.sorted});
      //console.log(newArr.indexOf(y));
      return (
        <div>
        {newArr}
        </div>
      );
    }
    // else{
    //   newArr=newArr.map((item,i)=> (<li key={i}> {item.card}</li>));
    //   console.log("Here");
    //   return (
    //     <div>
    //     { newArr}
    //     </div>
    //   );
    // }
  }
  render() {
    if (!this.state.name){
      return this.renderNoName();
    }
    let newArr=this.state.cards.map((item,i)=> <li key={i}> {item.card}</li>);
    return (
      <div className="App">
      <h1 className="header"> Welcome to our site {this.state.name}!</h1>
      <button onClick={this.handleSorted}>Sort</button>
      <ul>
      {this.state.sorted? this.sortRender():newArr }
      </ul>
      </div>
    );
  }
}

export default App;
