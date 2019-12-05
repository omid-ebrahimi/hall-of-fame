import React from 'react';
import { Options } from 'react-native-navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import { setRootAppStack } from '../../navigation';
import Welcome from './Welcome';
import Slide from './Slide';
import FameList from './FameList';

const slides = [Welcome, FameList];

function AppScreen(): JSX.Element {
    return (
        <AppIntroSlider
            slides={slides}
            renderItem={Slide}
            keyExtractor={(item, index): string => index.toString()}
            onDone={setRootAppStack}
        />
    );
}

AppScreen.options = (): Options => ({
    topBar: { visible: false },
    bottomTabs: { visible: false, drawBehind: true },
});

export default AppScreen;
