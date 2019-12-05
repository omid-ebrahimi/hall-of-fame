import React from 'react';
import { Text, TextProps } from 'react-native';
import { typography } from '../../theme/typography';

export const Headline3: React.FunctionComponent<TextProps> = (props): JSX.Element => {
    const { style, children, ...otherProps } = props;
    return (
        <Text {...otherProps} style={[typography.headline3, style]}>
            {children}
        </Text>
    );
};
