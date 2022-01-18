import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import PublicStations from './PublicStations';
import PrivateStations from './PrivateStations';
import Stations24h from './Stations24h';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/public_stations">
              <PublicStations />
            </Route>
            <Route path="/private_stations">
              <PrivateStations />
            </Route>
            <Route path="/24h_city_stations">
              <Stations24h />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
