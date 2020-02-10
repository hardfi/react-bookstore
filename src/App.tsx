import * as React from 'react';
// @ts-ignore
import environment from 'environment';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { BehaviorSubject } from 'rxjs';
import { History } from 'history';
import { userChanged, usersFetched } from './redux/actions';
import UserModel from './base/user.model';
import { USER_ROLE } from './base/user-role.model';
import { LoginPage } from './pages/Login';
import StateModel from './base/state.model';
import { HeaderContainer } from './components/Header';
import { HomePage } from './pages/Home';
import { PaymentPage } from './pages/Payment';
import { OrderHistoryPage } from './pages/Orders';
import { CartPage } from './pages/Cart';
import './App.css';
import { UsersPage } from './pages/Users';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/Loader';
import { DispatchProps, StateProps } from './base/props.model';

export const loaderState$ = new BehaviorSubject(false);

interface ParentProps {
  history: History;
}

type Props = StateProps & DispatchProps & ParentProps;

export class App extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    console.log('environment()');
    console.log(environment());
    const { users } = this.props;
    if (!users.length) {
      const { usersFetched } = this.props;
      const { usersApi } = environment();
      fetch(`${usersApi}?format=json&results=5&nat=gb&inc=name,login,picture`)
        .then((res) => res.json())
        .then((response) => {
          const users = response.results.map((user: any, i: number) => ({
            id: user.login.uuid,
            name: user.name.first,
            surname: user.name.last,
            username: user.login.username,
            password: user.login.password,
            role: i % 2 ? USER_ROLE.admin : USER_ROLE.client,
            pictureUrl: user.picture.large,
          } as UserModel));
          usersFetched(users);
        });
    }
    loaderState$.subscribe((isLoading) => this.setState({ isLoading }));
  }

  render() {
    const { history } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading && <Spinner />}
        <HeaderContainer history={history as History} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/orders-history' component={OrderHistoryPage} />
          <Route path='/users' component={UsersPage} />
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = (state: StateModel) => ({
  users: state.users,
  user: state.user,
});
const mapDispatchToProps = { usersFetched, userChanged };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
