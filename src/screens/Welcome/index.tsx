import React from 'react';
import { View } from 'react-native';
import { Options } from 'react-native-navigation';
import { Headline } from '../../components/Typography';
import { styles } from './styles';

function WelcomeScreen(): JSX.Element {
    return (
        <View style={styles.screen}>
            <Headline>Welcome to Hall af Fame</Headline>
        </View>
    );
}

WelcomeScreen.options = (): Options => ({
    topBar: { visible: false },
    bottomTabs: { visible: false, drawBehind: true },
});

export default WelcomeScreen;
