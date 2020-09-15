import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoginComponent } from './components/Login';
//import { BookComponent1 } from './components/Product';
import { BookComponent } from './components/Book';
import ProductList from './components/ProductList';


//import Login from './components/Login'
//This is called pure component or stateless component
export class App extends Component {
    constructor(){
        super();
        this.state={
            companyName:"",
            cartCount: 0
        }
    }
    
    handleClick = (data) => {
        console.log("I clicked");
        console.log(data);
        //props.handleClick(data);
        this.setState({cartCount : this.state.cartCount+1});
    }

    render() {
        return <div><Header title={this.state.companyName} cartCount={this.state.cartCount}/><ProductList UpdateCartInApp={this.handleClick}/></div>
    }
} 


// = () => {
//     const companyName = 'Pega Systems';
//     //return <div><Header title={companyName} /><h1><center>Welcome to pega</center></h1><LoginComponent/><BookComponent/><Footer /><ProductList/></div>
//     return <div><Header title={companyName} /><ProductList/></div>
// };

export default App;