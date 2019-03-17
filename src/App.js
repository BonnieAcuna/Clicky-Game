import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Pics from "./components/Pics.json";
import pepperoni from "./Pictures/pepperoni.jpeg";
import sausage from "./Pictures/sausage.jpg";
import hawaiian from "./Pictures/hawaiian.jpg";
import margherita from "./Pictures/margherita.jpeg";
import supreme from "./Pictures/supreme.jpg";
import vegetarian from "./Pictures/vegetarian.jpg";
import pesto from "./Pictures/pesto.jpeg";
import shrimp from "./Pictures/shrimp.jpeg";
import bbqChicken from "./Pictures/bbqchicken.jpg";
import pickle from "./Pictures/pickle.jpeg";
import potato from "./Pictures/potato.jpg";
import cheese from "./Pictures/cheese.jpg";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };
  
  shuffleArray = (array) => {
    let picArray = Pics;
    for (let i = picArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [picArray[i], picArray[j]] = [picArray[j], picArray[i]];
    }
    return picArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "pepperoni":
        return `${pepperoni}`
      case "sausage":
        return `${sausage}`
      case "hawaiian":
        return `${hawaiian}`
      case "margherita":
        return `${margherita}`
      case "supreme":
        return `${supreme}`
      case "vegetarian":
        return `${vegetarian}`
      case "pesto":
        return `${pesto}`
      case "shrimp":
        return `${shrimp}`
      case "bbqChicken":
        return `${bbqChicken}`
      case "pickle":
        return `${pickle}`
      case "potato":
        return `${potato}`
      case "cheese":
        return `${cheese}`
      default:
        return `${pepperoni}`
    }
  }

  
  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Pics).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
