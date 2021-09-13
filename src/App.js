import './App.css';
import Navbar from './components/navbar/navbar';
import Herbarium from './components/pages/herbarium/herbarium';
import About from './components/pages/about_page/about';
import Home from './components/pages/home_page/home';
import Footer from './components/footer/footer';
 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/herbarium" exact component={Herbarium}/>
            
          </Switch>

        <Footer />
        

      </Router>
    </div>
  );
}

export default App;
