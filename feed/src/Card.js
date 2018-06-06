import React, { Component } from 'react';


class Card extends Component {
  constructor(props){
    super(props);
    let timeIn=Date.now();
    this.state={
      name:this.props.name,
      proPic:this.props.proPic,
      pic:this.props.pic,
      text:this.props.text,
      liked:0,
      hidden:0,
      time:timeIn,
      comments:[],
      userName: this.props.userName,
      tempComment:""
    };
    this.hidePost=this.hidePost.bind(this);
    this.handleLiked=this.handleLiked.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.renderLiked=this.renderLiked.bind(this);
    this.renderHidden=this.renderHidden.bind(this);
    this.addComment=this.addComment.bind(this);
  }
  addComment(nameIn,textIn){
    let newComment=this.state.comments;
    newComment.push({name:nameIn,text:textIn});
    this.setState({comments:newComment});
  }
  handleLiked(){
    //event.preventDefault();
    let isLiked=!this.state.liked;
    this.setState({liked:isLiked});
    //console.log(isLiked)
  }
  hidePost(){
    let isHidden=!this.state.hidden;
    this.setState({hidden:isHidden});
    //console.log(isHidden);
  }
  renderHidden(){
    return (
      <button className="unHideButton" onClick={this.hidePost}>Unhide</button>
    );
  }
  renderLiked(){
    if (this.state.liked){
      return (
        <button className="likedButton" onClick={this.handleLiked}>Liked!</button>
      );
    }
    return (
      <button className="likeButton" onClick={this.handleLiked}>Like</button>
    );
  }
  renderComments(){
    if (this.state.comments.length){
      const comments=this.state.comments.map((item,i)=><li key={i}><b>{item.name}</b>   {item.text}</li>);
      return (
        <ul>
        {comments}
        </ul>
      );
    }
    return;
  }
  handleSubmit(event){
    event.preventDefault();
    this.addComment(this.state.userName,this.state.tempComment);
    this.setState({tempComment:""})
  }
  handleChange(event){
    event.preventDefault();
    const text=event.target.value;
    this.setState({tempComment:text});
    event.target.value="";
}
  render() {
    if (this.state.hidden){
      return this.renderHidden();
    }
    return (
      <div>
      <h1> Welcome to our site {this.state.userName}!</h1>
        <button className="hideButton" onClick={this.hidePost}>Hide</button>
        <p className="profile">{this.state.proPic}</p>
        <p className="name">{this.state.name}</p>
        <p className="post">{this.state.text}</p>
        {this.renderLiked()}
        {this.renderComments()}
        <form onSubmit={this.handleSubmit}>
        <label>
        Type your comment and press enter:
        </label>
          <input type="text" value={this.state.tempComment} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Card;