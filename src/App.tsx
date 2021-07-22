import { Switch, Route } from 'react-router-dom';
import LoginForm from './pages/Login';
import JoinForm from './pages/Join';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={LoginForm} />
        <Route path="/join" component={JoinForm} />
      </Switch>
    </div>
  );
};

export default App;
