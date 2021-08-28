import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Delivery from './Components/Delivery';
import Footer from './Components/Footer';
import Index from './Components/Index';
import Service_Pizaa from './Components/Service_Pizaa';
import Service_Manakes from './Components/Mnakesh';
import Service_lzania from './Components/lazania';
import Nav from './Components/Nav';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Nav/>
          <Route exact path='/' component={Index} />
          <Route exact path='/pizaa' component={Service_Pizaa} />
          <Route exact path='/mnakesh' component={Service_Manakes} />
          <Route exact path='/lzania' component={Service_lzania} />
          <Delivery/>
          <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;
