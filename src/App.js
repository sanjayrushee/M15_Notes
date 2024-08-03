import {Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import './App.css';

const App = () => (
  <Routes>
    <Route  path="/login" component={Login} />
    
  </Routes>
)

export default App;
