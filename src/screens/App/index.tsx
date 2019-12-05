import React, { useEffect, useState, useRef } from 'react';
import { Options } from 'react-native-navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import { setRootAppStack } from '../../navigation';
import Welcome from './Welcome';
import Slide from './Slide';
import FameList from './FameList';
import { useBackHandler } from '../../utils/hooks';

const slides = [Welcome, FameList];

function AppScreen({ componentId }): JSX.Element {
    let slider = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backRequested, setBackRequested] = useBackHandler(componentId);
    useEffect(() => {
        if (backRequested && slider) {
            const index = Math.abs(currentIndex + 1 - slides.length);
            slider.goToSlide(index);
            setCurrentIndex(index);
            setBackRequested(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backRequested]);
    return (
        <AppIntroSlider
            ref={(s): void => {
                slider = s;
            }}
            slides={slides}
            renderItem={Slide}
            hidePagination={true}
            onSlideChange={setCurrentIndex}
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
