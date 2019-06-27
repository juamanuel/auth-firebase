import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '' });

        firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
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
                        <Button onPress={this.onButtonPress.bind(this)}>LOG IN</Button>
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
