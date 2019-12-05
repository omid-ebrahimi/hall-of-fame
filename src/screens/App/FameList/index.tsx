import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Headline, Subtitle1 } from '../../../components/Typography';
import { styles } from './styles';
import { getFameList } from '../../../api/services/fame';
import { FameDto } from '../../../api/services/types/fame';

function FameList(): JSX.Element {
    const [fames, setFames] = useState<FameDto[]>([]);
    useEffect(() => {
        getFameList().then(setFames);
    }, []);
    return (
        <View style={styles.screen}>
            <Headline>Hall of Fame List</Headline>
            <FlatList data={fames} renderItem={({ item }): JSX.Element => <Subtitle1>{item.name}</Subtitle1>} />
        </View>
    );
}

export default FameList;
