import React from 'react';
import { View } from 'react-native';
import { Headline } from '../../../components/Typography';
import { styles } from './styles';

function Welcome(): JSX.Element {
    return (
        <View style={styles.screen}>
            <Headline>Welcome to Hall af Fame</Headline>
        </View>
    );
}

export default Welcome;
