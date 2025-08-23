import {useColorScheme} from "react-native";

export const useAppTheme = () => {
    const theme = useColorScheme() ?? 'light';
    return theme;
}