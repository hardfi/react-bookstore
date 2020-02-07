import * as React from 'react';
import { connect } from 'react-redux';
import { contactsFetched, userChanged } from './redux/actions';
import UserModel from './base/user.model';
import { USER_ROLE } from './base/user-role.model';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/Login'
import StateModel from './base/state.model';
import { HeaderContainer } from './components/Header';
import { HomePage } from './pages/Home';
import { PaymentPage } from './pages/Payment';
import { OrderHistoryPage } from './pages/OrderHistory';
import { CartPage } from './pages/Cart';
import './App.css';

export class App extends React.Component<any, []> {
    componentDidMount() {
        if (!this.props.contacts.length) {
            const {contactsFetched} = this.props;
            fetch('https://randomuser.me/api/?format=json&results=3&nat=gb&inc=name,login,picture')
                .then(res => res.json())
                .then(response => {
                    const users = response.results.map((user: any, i: number) => ({
                        id: user.login.uuid,
                        name: user.name.first,
                        surname: user.name.last,
                        username: user.login.username,
                        password: user.login.password,
                        role: i % 2 ? USER_ROLE.admin : USER_ROLE.client,
                        pictureUrl: user.picture.large
                    } as UserModel));
                    contactsFetched(users);
                });
        }
    }

    render() {
        const {history} = this.props;
        return (
            <div>
                <HeaderContainer history={history}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/payment" component={PaymentPage}/>
                    <Route path="/orders-history" component={OrderHistoryPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state: StateModel) => {
    return {
        contacts: state.contacts,
        user: state.user,
    }
};
const mapDispatchToProps = {contactsFetched, userChanged};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
