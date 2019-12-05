import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

const animations = [
    'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif',
    'https://media.giphy.com/media/26gsqQxPQXHBiBEUU/giphy.gif',
    'https://media.giphy.com/media/l0EwYkyU1JCExVquc/giphy.gif',
    'https://media.giphy.com/media/d1E1szXDsHUs3WvK/giphy.gif',
    'https://media.giphy.com/media/l0ExvMqtnw7aTzPCE/giphy.gif',
];

function Welcome(): JSX.Element {
    const [index, setIndex] = useState(0);
    function showNextAnimation(): void {
        setIndex(currentIndex => (currentIndex + 1 + animations.length) % animations.length);
    }
    useEffect(() => {
        const interval = setInterval(showNextAnimation, 5000);
        return (): void => clearInterval(interval);
    }, []);
    return (
        <View style={styles.screen}>
            <Image source={{ uri: animations[index] }} style={styles.image} />
        </View>
    );
}

export default Welcome;
