import { Switch, Route } from 'react-router-dom';
import { NewLoginForm } from './pages/Login';
import { NewJoinForm } from './pages/Join';
import { Main } from './pages/Main';
import '../src/assets/style/reset.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={NewLoginForm} />
        <Route path="/join" component={NewJoinForm} />
      </Switch>
    </div>
  );
};

export default App;
