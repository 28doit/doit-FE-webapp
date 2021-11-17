import { Switch, Route } from 'react-router-dom';
import { NewLoginForm, RePasswordForm, FindIdForm } from './pages/Login';
import { NewJoinForm } from './pages/Register';
import { Main } from './pages/Main';
import { Search, BestCategorySearch } from './pages/Search';
import { MyPage } from './pages/MyPage';
import { Notice } from './pages/NoticeAll';
import { Err404 } from './pages/404';
import { ImgDetail } from './pages/ImgDetail';
import ROUTES from './commons/routes';
import '../src/assets/style/reset.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.HOME} exact component={Main} />
        <Route path={ROUTES.LOGIN} component={NewLoginForm} />
        <Route path={ROUTES.REPASSWORD} component={RePasswordForm} />
        <Route path={ROUTES.FINDID} component={FindIdForm} />
        <Route path={ROUTES.JOIN} component={NewJoinForm} />
        <Route path={`${ROUTES.CATEGORY}`} component={BestCategorySearch} />
        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={`${ROUTES.IMGDETAIL}`} component={ImgDetail} />
        <Route path={`${ROUTES.USER}/:name`} component={MyPage} />
        <Route path={`${ROUTES.NOTICE}/:name`} component={Notice} />
        <Route component={Err404} />
      </Switch>
    </div>
  );
};

export default App;
