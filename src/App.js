import { Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HomeTemplate from './Templates/HomeTemplate';
import HomePage from './Pages/HomePage';
import UserInfo from './Pages/UserInfo';
import CharityDetail from './Pages/CharityDetail';
import ActivityDetail from './Pages/ActivityDetail';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <HomeTemplate exact path="/home" component={HomePage} />
        <HomeTemplate exact path="/info" component={UserInfo} />
        <HomeTemplate exact path="/chatitydetail" component={CharityDetail} />
        <HomeTemplate exact path="/activitydetail" component={ActivityDetail} />
      </Switch>
    </Router>
  );
}

export default App;
