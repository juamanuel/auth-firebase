import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
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
    }
render() {
    return (
        <View>
            <Header title="AUTH" />
            <LoginForm />
        </View>
    );
}
}

export default App;
