import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
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
                 <Card>
                        <View style={styles.containerWelcomeStyle}>
                            <Welcome />
                        </View>
                        <View style={styles.containerWelcomeStyle}>
                            <Button onPress={() => firebase.auth().signOut()}>
                                LOG OUT
                            </Button>
                        </View>
                    </Card>
                );
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

const styles = {
    containerWelcomeStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
        }
};

export default App;
