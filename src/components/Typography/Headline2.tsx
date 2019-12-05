import React from 'react';
import { Text, TextProps } from 'react-native';
import { typography } from '../../theme/typography';

export const Headline2: React.FunctionComponent<TextProps> = (props): JSX.Element => {
    const { style, children, ...otherProps } = props;
    return (
        <Text {...otherProps} style={[typography.headline2, style]}>
            {children}
        </Text>
    );
};
