import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import TextBox from './TextBox';

class App extends Component {
  constructor(){
      super();
      this.state = {
        count : 0
      }
  }
  
  handleClick = () => {
    console.log("Clicked");
    this.setState({count:this.state.count+1})    
  }

  DecrementHandleClick = () => {
    console.log("Clicked");
    this.setState({count:this.state.count-1})    
  }

  render() {
    return (<div className="App">
      {/* <Counter count = {this.state.count} />
      <Button clickButton={this.handleClick} />
      <Button clickButton={this.DecrementHandleClick} /> */}
      <TextBox/>
    </div>
    );  
}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
