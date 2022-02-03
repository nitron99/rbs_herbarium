import './App.css';
import Navbar from './components/navbar/navbar';
import Herbarium from './components/pages/herbarium/herbarium';
import About from './components/pages/about_page/about';
import Home from './components/pages/home_page/home';
import Footer from './components/footer/footer';
import Login from'./components/pages/login_page/login';
import Edit from './components/pages/edit_page/edit';
import ProtectedRoute from './components/pages/edit_page/protectedRoute';

import React , {useState} from 'react';
 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = (props) => {

  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');

  const Logined = (index) => { 
    //console.log('logined in');
    setIsAuth(true);
  };

  const Logouted = (index) => {
    //console.log('logoutt ');
    setIsAuth(false);
  }

  const tokenn = (tk) => {
    setToken(tk)
  }

  return ( 
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
          
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About}/>
            <Route path="/herbarium" exact component={Herbarium}/>
            {/* <Route path="/login" exact component={Login}/> */}
            <Route path="/login" exact component={(props) => <Login authy={Logined} token={tokenn}/>}/>
            {/* (isAuth === true) ? <Route path="/edit" component={(props) => <Edit authy={Logouted} />}/>
            : <Redirect to={{pathname : "/login", state:{ from : props.location}}} /> */}

            <ProtectedRoute path="/edit" component={(props) => <Edit authy={Logouted} token={token} />} isAuth={isAuth}/>
            
            
          </Switch>

          <Footer />

          
      </Router>
    </div>
  );
}

export default App;
