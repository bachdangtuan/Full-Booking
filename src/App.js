
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom'
import { HomeTemplate } from './Template/HomeTemplate/HomeTemplate'
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
      </Switch>
    </Router>
  );
}

export default App;
