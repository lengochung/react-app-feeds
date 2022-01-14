
import './css/App.css';
import './css/bootstrap.css';

// compornent login
import Login from './Components/Login';
import Logged from './Components/Logged';
import { useSelector } from 'react-redux';


function App() {
  // 
  const user = useSelector(state => state.user)
  
  let renderLogged
  if(user.logged)
    renderLogged = <Logged />
  else
    renderLogged = <Login />

  return (
    <>{ renderLogged }</>
  )
}

export default App;