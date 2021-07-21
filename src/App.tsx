import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './pages/Login';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
};

export default App;
