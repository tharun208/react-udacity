import React,{ Component } from 'react';
import './App.css';
import imgsrc from './assets/images/img_avatar.png'
class Cards extends Component {
  render()
  {
    return (
      <div className="card">
  <img src={imgsrc} alt="Avatar" style={imgStyle}/>
  <div className="container">
    return <h4><b></b></h4>
    <p>Interior Designer</p>
  </div>
</div>
    );
  }
}
var imgStyle={
  width:'100%'
}
export default Cards;
