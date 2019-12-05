import React from 'react';
import { View } from 'react-native';
import { Headline, Subtitle1 } from '../../../components/Typography';
import { styles } from './styles';

function Slide({ item }): JSX.Element {
    return (
        <View style={styles.container}>
            <Headline>{item.title}</Headline>
            <Subtitle1>{item.text}</Subtitle1>
        </View>
    );
}

export default Slide;
