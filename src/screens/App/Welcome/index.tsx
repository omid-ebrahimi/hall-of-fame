import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import ShuffleSeed from 'shuffle-seed';
import { styles } from './styles';
import ShuffleForm from './ShuffleForm';

const initialAnimations = [
    'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif',
    'https://media.giphy.com/media/26gsqQxPQXHBiBEUU/giphy.gif',
    'https://media.giphy.com/media/l0EwYkyU1JCExVquc/giphy.gif',
    'https://media.giphy.com/media/d1E1szXDsHUs3WvK/giphy.gif',
    'https://media.giphy.com/media/l0ExvMqtnw7aTzPCE/giphy.gif',
];

function Welcome(): JSX.Element {
    const [animations, setAnimations] = useState(initialAnimations);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        function showNextAnimation(): void {
            setIndex(currentIndex => (currentIndex + 1 + animations.length) % animations.length);
        }
        const interval = setInterval(showNextAnimation, 5000);
        return (): void => clearInterval(interval);
    }, [animations.length]);

    return (
        <View style={styles.screen}>
            <ShuffleForm onSave={(value): void => setAnimations(ShuffleSeed.shuffle(animations, value))} />
            <Image source={{ uri: animations[index] }} style={styles.image} />
        </View>
    );
}

export default Welcome;
