import React from 'react';
import { View } from 'react-native';
import { Headline } from '../../../components/Typography';
import { styles } from './styles';

function FameList(): JSX.Element {
    return (
        <View style={styles.screen}>
            <Headline>Hall of Fame List</Headline>
        </View>
    );
}

export default FameList;
