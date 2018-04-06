import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import Data from './JsonData/document.json'
class App extends Component {
  constructor()
  {   super();
      this.state={course:'popular'};
  }
  showCourses(courseName) {
    this.setState({course:courseName});
  }
  renderCards(courseName) {
    console.log(courseName);
    if(courseName === 'popular'){
    return Data.popular.map((i) => {
      return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
    })
  }
  else if(courseName === 'Machine Learning and Deep Learning'){
    return Data.msd.map((i) => {
      return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
    })
  }
    else if(courseName === 'Data Science'){
      return Data.ds.map((i) => {
        return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
      })
    }
    else if(courseName === 'Artificial Intelligence'){
      return Data.ai.map((i) => {
        return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
      })
    }
    else if(courseName === 'Mobile Development'){
      return Data.md.map((i) => {
        return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
      })
    }
    else if(courseName === 'Web Development'){
      return Data.wd.map((i) => {
        return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
      })
    }
    else if(courseName === 'Virtual Reality'){
      return Data.vr.map((i) => {
        return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
      })
    }
    else if(courseName === 'Digital Marketing'){
      return Data.dm.map((i) => {
        return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
      })
    } else {
    return Data.as.map((i) => {
      return <div><Cards name={i.Name} instructor={i.Instructor}/></div>
    })
  }
  }
  renderButtons(btnarray) {
    return btnarray.map((i,index) =>{
    return <button className="button button2" onClick={()=>this.showCourses(i)}>{i}</button>
  })
  }
  render() {
    const btnarray=['popular','Machine Learning and Deep Learning','Data Science','Artificial Intelligence','Mobile Development','Web Development','Virtual Reality','Digital Marketing','Autonomous Systems'];
    return (
      <div className="App">
      <div>
        <p>Choose From Our Category Of Courses</p>
         {this.renderButtons(btnarray)}
      </div>
      <div>
      <div className="row">{this.renderCards(this.state.course)}</div>
      </div>
      </div>
    );
  }
}
export default App;
