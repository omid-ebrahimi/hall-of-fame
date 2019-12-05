import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Button, Input } from 'react-native-elements';

function ShuffleForm({ onSave }): JSX.Element {
    const [value, setValue] = useState('1');
    return (
        <View style={styles.container}>
            <Input label="Enter a number" value={value} onChangeText={setValue} inputStyle={styles.input} />
            <View style={styles.buttonsContainer}>
                <Button title="Save" onPress={(): void => onSave(value)} />
                <Button title="Randomise" onPress={(): void => setValue('' + Math.floor(Math.random() * 10))} />
            </View>
        </View>
    );
}

export default ShuffleForm;
