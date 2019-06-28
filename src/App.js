import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyDSLrNEKmOlLXo3jVUxciZMEGnc7udcwKU',
                authDomain: 'auth-rn-2640f.firebaseapp.com',
                databaseURL: 'https://auth-rn-2640f.firebaseio.com',
                projectId: 'auth-rn-2640f',
                storageBucket: '',
                messagingSenderId: '75748899908',
                appId: '1:75748899908:web:b594fafaa7c17710'
              });
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Welcome
                    title="Welcome to App!"
                />);
            case false:
                return <LoginForm />;
            default:
                 return (
                 <CardSection>
                    <Spinner size="large" color="#0000ff" />
                </CardSection>
                );
        }
    }

render() {
    return (
        <View>
            <Header title="AUTH" />
            {this.renderContent()}
        </View>
    );
}
}

export default App;
