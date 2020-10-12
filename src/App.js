import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Landing from './component/layout/Landing';
import Footer from './component/layout/Footer';
import allProducts from './component/allProductsandcart/allProducts';
import cart from './component/allProductsandcart/cart';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App"> 
      <Route exact path="/" component={Landing} />
      <div>
      <Route exact path="/allProducts" component={allProducts}/>
      </div>
      <Footer />
    </div>
    </Router>
  );
 }
}

export default App;
