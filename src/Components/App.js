import React from 'react';
import { Switch, Route } from 'react-router-dom'
import History from './History'
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Footer from './Footer'
import AuthMain from './AuthMain'

const App =()=>(
  <div>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/history' component={History}/>
      <Route path='/authMain' component={AuthMain}/>
      <Route path='/signIn' component={SignIn}/>
      <Route path='/signUp' component={SignUp}/>
    </Switch>
    {/* <Footer/> */}
  </div>
)

export default App;
