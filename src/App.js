import {Route, Switch} from 'react-router-dom'
import Login from './Components/Login';
import Singup from './Components/Singup';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/singup" component={Singup} />

  </Switch>
)

export default App;
