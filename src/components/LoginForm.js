import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {

    state = { email: '', password: '' };
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
                    <CardSection>
                        <Button>LOG IN</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default LoginForm;
