import { StyleSheet } from 'react-native';
import { colors, fonts } from './variables';

export const typography = StyleSheet.create({
    headline: {
        fontFamily: fonts.medium,
        fontSize: 25,
        lineHeight: 30,
    },
    headline2: {
        fontFamily: fonts.medium,
        fontSize: 18,
        fontWeight: 'bold',
    },
    headline3: {
        fontFamily: fonts.medium,
        fontSize: 18,
        lineHeight: 25,
    },
    headline4: {
        fontFamily: fonts.medium,
        fontSize: 14,
    },
    body: {
        fontFamily: fonts.light,
        fontSize: 18,
        lineHeight: 25,
    },
    body2: {
        fontFamily: fonts.regular,
        fontSize: 18,
        lineHeight: 22,
    },
    subtitle1: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 19,
    },
    subtitle2: {
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 17,
    },
    subtitle3: {
        fontFamily: fonts.medium,
        fontSize: 9,
    },
    subtitle4: {
        fontFamily: fonts.medium,
        fontSize: 12,
    },
    subtitle5: {
        fontFamily: fonts.light,
        fontSize: 12,
    },
    link: {
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 21,
    },
    button: {
        fontFamily: fonts.medium,
        fontSize: 16,
        lineHeight: 19,
    },
    info: {
        color: colors.info,
    },
    error: {
        color: colors.error,
    },
});
