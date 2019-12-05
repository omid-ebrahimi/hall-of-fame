import { Options } from 'react-native-navigation';
import { fonts } from '../theme/variables';
import { theme } from '../theme';

export const defaultOptions: Options = {
    topBar: {
        title: {
            alignment: 'center',
            color: '#202020',
            fontFamily: fonts.medium,
            fontSize: 25,
        },
        subtitle: {
            alignment: 'center',
        },
        background: {
            color: theme.colors.grey4,
        },
    },
    bottomTabs: {
        titleDisplayMode: 'alwaysHide',
    },
    bottomTab: {
        iconColor: theme.colors.grey5,
        selectedIconColor: 'black',
        iconInsets: { top: 0, left: 0, bottom: 0, right: 0 },
    },
};
