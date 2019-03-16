import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import SwapiService from './../../services/SwapiService';
import { SwapiServiceProvider } from '../../services/SwapiServiceContext';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from './../Pages';
import './App.scss';
import { StarshipDetails } from '../StarWarsComponents';

class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false,
        loginInfo: 'Login to see the secret page!'
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true,
            loginInfo: 'Successfully login. You can see the secter page.'
        });
    };

    render() {
        const { isLoggedIn, loginInfo } = this.state;
        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <BrowserRouter>
                    <div className="app-container">
                        <Header />
                        <RandomPlanet />
                        <Switch>
                            <Route path="/" exact render={() => <h2 className="app-container__main">Welcome to StarWars application</h2>} />
                            <Route path='/people/:id?' component={PeoplePage} />
                            <Route path='/planets' component={PlanetsPage} />
                            <Route path='/starships' exact component={StarshipsPage} />
                            <Route path='/starships/:id'
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={id}/>
                                }}
                            />
                            <Route path='/login'
                                render={() => (
                                    <LoginPage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin}
                                        loginInfo={loginInfo}
                                    />
                                )}
                            />
                            <Route path='/secret'
                                render={() => (
                                    <SecretPage isLoggedIn={isLoggedIn} />
                                )}
                            />
                            <Route render={() => <h3 className="app-container__main">This page does not exist</h3>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </SwapiServiceProvider>
        );
    }
}

export default App;