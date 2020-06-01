import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import History from './History'
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Footer from './Footer'

const App =()=>(
  <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/history' component={History}/>
      <Route path='/signIn' component={SignIn}/>
      <Route path='/signUp' component={SignUp}/>
    </Switch>
    <Footer/>
  </div>
)

export default App;
