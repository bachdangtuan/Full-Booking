
import './App.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router'
import { HomeTemplate } from './Template/HomeTemplate/HomeTemplate'
import { CheckoutTemplate } from './Template/CheckoutTemplate/CheckoutTemplate'
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Details from './Component/PageDetails/Details';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import { UserTemplate } from './Template/UserTemplate/UserTemplate';
import Loading from './Component/Loading/Loading';

import {AdminTemplate} from './Template/AdminTemplate/AdminTemplate'

import Dashbroad from './Pages/Admin/Dashbroad/Dashbroad'
import Film from './Pages/Admin/Films/Film'
import Showtime from './Pages/Admin/Showtime/Showtime'

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Loading></Loading>
      <Switch>
        <UserTemplate path='/login' exact Component={Login}></UserTemplate>
        <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
        <HomeTemplate path="/detail/:id" exact Component={Details}></HomeTemplate>
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} ></CheckoutTemplate>

        <AdminTemplate path="/admin" exact Component={Dashbroad}></AdminTemplate>
        <AdminTemplate path="/admin/films" exact Component={Film}></AdminTemplate>
        <AdminTemplate path="/admin/users" exact Component={Dashbroad}></AdminTemplate>
        <AdminTemplate path="/admin/showtime" exact Component={Showtime}></AdminTemplate>
      </Switch>
    </Router>

  );
}

export default App;
