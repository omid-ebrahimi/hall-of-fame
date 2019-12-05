import { ButtonProps } from 'react-native-elements';
import { typography } from '../typography';
import { colors } from '../variables';

export const Button: ButtonProps = {
    raised: true,
    titleStyle: {
        ...typography.button,
    },
    disabledStyle: {
        backgroundColor: colors.primaryLight,
    },
    disabledTitleStyle: {
        color: 'white',
    },
};
