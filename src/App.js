/**
 * Marko Golemovic
 * 2019-07-04
 * Description: App which will display countdown to x day. 
 */
import React, { Component } from 'react';
import './App.css';
import {Timer} from './timer/timer';
import validation from './validation/validation';
import './Sass.scss';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';


/**
 * This is main class which will call all component
 */
export class App extends Component {
 
  /*this function which will call all other functions*/ 
 render() {
  return (
    // <div className="App">
    //  <Timer></Timer>
    // </div>
    <div className="center">
      <div className="container">
        <div className="container__item__one">
          <h1>WE ARE COMING SOON</h1> 
          <p>Our exciting new website is coming soon! Check back later...</p>
        </div>
        <div className="container__item__two">
          <Timer stopAtZero={true} countTo={"2019-07-08 15:00:00"}></Timer>
        </div>
        <div className="container__item__three">
        <form className="form-line">
          <h2>Subscribe to our newsletter</h2>
          
          <div className="form-line-style">
            <input name="email" className="input-submit" placeholder="Email Address" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required ></input>
            <button className="button-submit" type="submit"> submit</button> 

          </div>
         </form>
        </div>
      </div>
    </div> 
  );
}
}

export default App;

