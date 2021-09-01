import { Switch, Route } from 'react-router-dom';
import { NewLoginForm, RePasswordForm } from './pages/Login';
import { NewJoinForm } from './pages/Join';
import { Main } from './pages/Main';
import { Search } from './pages/Search';
import { MyPage } from './pages/MyPage';
import { Notice } from './pages/NoticeAll';
import ROUTES from './commons/routes';
import '../src/assets/style/reset.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.HOME} exact component={Main} />
        <Route path={ROUTES.LOGIN} component={NewLoginForm} />
        <Route path={ROUTES.REPASSWORD} component={RePasswordForm} />
        <Route path={ROUTES.JOIN} component={NewJoinForm} />
        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={`${ROUTES.USER}/:name`} component={MyPage} />
        <Route path={`${ROUTES.NOTICE}/:name`} component={Notice} />
      </Switch>
    </div>
  );
};

export default App;
