import './App.css';
import Navbar from './components/navbar/navbar';
import Botany from './components/pages/botanical_page/botany';
import About from './components/pages/about_page/about';
import Home from './components/pages/home_page/home';
 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
          <Switch>
            <Route path="/about" exact component={About}/>
            <Route path="/botanical" exact component={Botany}/>

          </Switch>

        <Home />

      </Router>
    </div>
  );
}

export default App;
