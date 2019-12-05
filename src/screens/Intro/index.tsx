import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slide from './Slide';
import { setRootAppStack } from '../../navigation';

const slides = [
    {
        key: '1',
        title: 'Intro 1',
        text: 'Description. Say something cool',
        backgroundColor: '#59b2ab',
    },
    {
        key: '2',
        title: 'Intro 2',
        text: 'Other cool stuff',
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        title: 'Intro 3',
        text: "I'm already out of descriptions",
        backgroundColor: '#22bcb5',
    },
];

function IntroScreen(): JSX.Element {
    return <AppIntroSlider slides={slides} renderItem={Slide} onDone={setRootAppStack} />;
}

export default IntroScreen;
