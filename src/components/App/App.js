import React from 'react';
import './App.css'
import LandingPage from '../LandingPage/LandingPage';
import AdminView from '../AdminView/AdminView';
import Login from '../AdminLogin/Login'
import Order from '../Order/Order';
import Products from '../Products/Products';
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from '../LandingPage/Nav'
import CakeForm from '../Order/Forms/CakeForm'
import CookieForm from '../Order/Forms/CookieForm'
import ShoppingCart from '../Order/ShoppingCart'
import UserInfoForm from '../Order/Forms/UserInfoForm'
import OrderConfirmation from '../Order/OrderConfirmation';
import PrivateRoute from '../PrivateRoute'
import TokenService from '../../services/token-service';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route 
          exact path='/'>
          <LandingPage />
        </Route>
        <Route 
          exact path='/products'>
          <Products />
        </Route>
        <Route 
          exact path='/order' 
          children={(rProps) => <Order {...rProps}/>} 
          />
        <Route 
          exact path='/order/cake'
          children={(rProps) => <CakeForm {...rProps}/>}
        />  
        <Route
          exact path='/order/cupcakes'
          children={(rProps) => <CakeForm {...rProps}/>}
        />        
        <Route 
          exact path='/order/cookies'
          children={(rProps) => <CookieForm {...rProps}/>}
        />        
        <Route 
          exact path='/order/cart' 
          children={(rProps) => <ShoppingCart {...rProps} />}/>
        <Route 
          exact path='/order/userform' 
          children={(rProps) => <UserInfoForm {...rProps}/>}/>
        <Route 
          extact path='/order/confirmation' 
          children={r => <OrderConfirmation {...r}/>}/>
        <Route 
          exact path='/login' 
          children = {(rProps) => TokenService.hasAuthToken() ? <Redirect to='/adminView'/> : <Login {...rProps}/>}/>
        <PrivateRoute 
          exact path='/adminView'
          component = {AdminView}
        />
      </Switch>
    </div>
  );
}

export default App;
