import {Route, Switch} from 'react-router-dom'
import Login from './Components/Login';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default App;
