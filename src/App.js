import React, { Component } from 'react';
import './App.css';
import Data  from './JsonData/document.json';
import Cards from './Cards'
var cardData = Data;
class App extends Component {
  showCourses(courseName) {
    console.log('courseName------->',courseName);
  }
  renderButtons(btnarray) {
    return btnarray.map((i,index) =>{
    return <button className="button button2" onClick={()=>this.showCourses(i)}>{i}</button>
  })
  }
  render() {
    const btnarray=['Popular','Machine Learning and Deep Learning','Data Science','Artificial Intelligence','Mobile Development','Web Development','Virtual Reality','Digital Marketing','Autonomous Systems'];
    return (
      <div className="App">
      <div>
        <h1>Select From Below List Of Courses</h1>
         {this.renderButtons(btnarray)}
      </div>
      </div>
    );
  }
}
export default App;
