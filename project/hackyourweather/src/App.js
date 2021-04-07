import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Forecast from './pages/Forecast';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/:cityName/:cityId' children={<Forecast />}></Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;