import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import * as serviceWorker from './serviceWorker';
import Comp from './components/comp';
import Book from './components/book';
import Show from './components/show';
import LoginPatient from './components/login';
import LoginAdmin from './components/loginAdmin';
import SignAdmin from './components/signAdmin';
import afterloginAdmin from './components/afterloginAdmin';
import afterloginpatient from './components/afterloginpatient';

ReactDOM.render(
  <BrowserRouter>
    <App>
   <Route exact path="/" component ={Home}></Route>
   <Route exact path="/about" component ={About}></Route>
   <Route exact path="/contact" component={Contact}></Route>
   <Route exact path="/comp" component={Comp}></Route>
   <Route exact path="/book" component={Book}></Route>
   <Route exact path="/show" component={Show}></Route>
   <Route exact path="/loginPatient" component={LoginPatient}></Route>
   <Route exact path="/loginAdmin" component={LoginAdmin}></Route>
   <Route exact path="/signAdmin" component={SignAdmin}></Route>
   <Route exact path="/afterloginAdmin" component={afterloginAdmin}></Route>
   <Route exact path="/afterloginpatient" component={afterloginpatient}></Route>
 </App>
</BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
