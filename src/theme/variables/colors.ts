import { Colors } from 'react-native-elements';

interface ThemeColors extends Partial<Colors> {
    primaryLight?: string;
    secondaryLight?: string;
    warningLight?: string;
    errorLight: string;
    successLight: string;
    info?: string;
}

export const colors: ThemeColors = {
    primary: '#355EFF',
    primaryLight: '#CFE5FC',
    secondary: '#FF6104',
    secondaryLight: '#FFD5BC',
    success: '#70C04F',
    successLight: '#E9F8F1',
    error: '#FF0000',
    errorLight: '#FFEBEB',
    warning: '#EC8A00',
    warningLight: '#FFF7EB',
    info: '#33b5e5',
    grey0: '#C4C4C4',
    grey1: '#707070',
    grey2: '#9B9B9B',
    grey3: '#F5F6F8',
    grey4: '#FCFDFF',
    grey5: '#BFBFBF',
    greyOutline: '#E2E2E2',
};
