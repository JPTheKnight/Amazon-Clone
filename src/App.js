import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { useEffect } from 'react';

import Home from './Home';
import Deals from './Deals';
import MyCart from './MyCart';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

const App = () => {

  const [{user}, setUser] = useStateValue();

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {

        if (authUser)
        {
          setUser ({
            type: 'set_user',
            user: authUser
          });
        } 
        else
        {
          setUser({
            type: 'set_user',
            user: null
          })
        }
      })
    }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/todays-deals' element={<Deals />} />
          <Route path='/my-cart' element={<MyCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
