import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoginComponent } from './components/Login';
import { BookComponent1 } from './components/Product';

//import Login from './components/Login'
//This is called pure component or stateless component
const App = () => {
    const companyName = 'Pega Systems';
    return <div><Header title={companyName} /><h1><center>Welcome to pega</center></h1><LoginComponent/><BookComponent1/><Footer /></div>
};

export default App;