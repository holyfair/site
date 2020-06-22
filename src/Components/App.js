import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import History from './History'
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Footer from './Footer'
import AuthMain from './AuthMain'

const App =()=>(
  <div>
    <Router>
      <Route exact path='/' component={Main}/>
      <Route path='/history' component={History}/>
      <Route path='/authMain' component={AuthMain}/>
      <Route path='/signIn' component={SignIn}/>
      <Route path='/signUp' component={SignUp}/>
    </Router>
    <Footer/>
  </div>
)

export default App;
