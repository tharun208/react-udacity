import React,{ Component } from 'react';
import './App.css';
import imgsrc from './assets/images/referrals@2x.jpg';
class Cards extends Component {
  render()
  {
    return (
         <div className="column">
         <div className="card">
                <a href={this.props.url}>
                <img src={imgsrc} alt={this.props.name}/>
                </a>
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
