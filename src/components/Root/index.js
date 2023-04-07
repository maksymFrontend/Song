import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import { CForumRegistration } from '../../pages/ForumRegistration'
import { CForumLogin } from '../../pages/ForumLogin'
import { CAccount } from '../../pages/Account'

export const Root = () => {
    return (
      <Switch>
            
        <Route path="/register"  component={CForumRegistration} />
        <Route path="/login"  component={CForumLogin} />
        <Route path="/account"  component={CAccount} />
        <Route path="/"  component={CForumRegistration} />
  
      </Switch>
    )
  }