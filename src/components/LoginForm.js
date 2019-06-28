import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
    }

    onLoginSuccess() {
        this.setState({
            loading: false,
            email: '',
            password: '',
            error: ''
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <Spinner
                    size="large"
                    color="#0000ff"
                />
            );
        } 
        return (
            <Button onPress={this.onButtonPress.bind(this)}>LOG IN</Button>
        );
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="user@mail.com"
                            autoCorrect={false}
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>
                    <CardSection>
                    <Input
                       secureTextEntry
                        placeholder="Password"
                        autoCorrect={false}
                        label="Password"
                        value={this.state.password}
                         onChangeText={password => this.setState({ password })}
                    />
                    </CardSection>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
  };


export default LoginForm;
