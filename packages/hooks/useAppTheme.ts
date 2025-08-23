import {useColorScheme} from "react-native";

export const useAppTheme = () => {
    return useColorScheme() ?? 'light';
}