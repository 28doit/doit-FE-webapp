import { Switch, Route } from 'react-router-dom';
import { NewLoginForm } from './pages/Login';
import { NewJoinForm } from './pages/Join';
import { Main } from './pages/Main';
import { Search } from './pages/Search';
import { MyPage } from './pages/MyPage';
import '../src/assets/style/reset.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={NewLoginForm} />
        <Route path="/join" component={NewJoinForm} />
        <Route path="/search" component={Search} />
        <Route path="/user/:name" component={MyPage} />
      </Switch>
    </div>
  );
};

export default App;
