import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, Button, CardSection } from './common';

const Welcome = ({ title }) => {
    const { textStyle } = styles;
    return (
        <Card>
            <CardSection>
                <Text style={textStyle}> {title} </Text>
            </CardSection>
            <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                    LOG OUT
                </Button>
            </CardSection>
    </Card>
    );
};

const styles = {
    textStyle: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    }
};

export default Welcome;
