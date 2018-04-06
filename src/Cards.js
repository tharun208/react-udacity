import React,{ Component } from 'react';
import './App.css';
import imgsrc from './assets/images/img_avatar.png';
class Cards extends Component {
  render()
  {
    return (
         <div className="column">
         <div className="card">
                <img src={imgsrc} alt="Avatar"/>
                <div className="container">
                     <h4>{this.props.name}</h4>
                      <p>{this.props.instructor}</p>
                </div>
         </div>
        </div>
    );
  }
}
export default Cards;
