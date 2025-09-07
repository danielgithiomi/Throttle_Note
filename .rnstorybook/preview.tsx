import {View} from "react-native";
import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";
import type {Preview} from '@storybook/react-native';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
    decorators: [
        (Story, {parameters}) => {
            const theme = useColorScheme() ?? "light";

            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 16,
                    backgroundColor: parameters.backgroundColor || Colors[theme].tint
                }}>
                    <Story/>
                </View>
            )
        }
    ]
};

export default preview;
