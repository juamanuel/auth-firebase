import React from 'react';
import { View, Text } from 'react-native';

const Welcome = () => {
    const { containerStyle, textStyle } = styles;
    return (
            <View style={containerStyle}>
                <Text style={textStyle}>
                    Welcome to Culiacán :D
                </Text>
            </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Welcome;
