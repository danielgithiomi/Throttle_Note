import {FC} from "react";
import {Text} from "react-native";
import {TNTextProps} from "@tn/atoms/TNText";
import {useAppTheme} from "@tn/hooks/useAppTheme";

export const TNText: FC<TNTextProps> = ({style, variant, textColor, children, className, ...props}) => {

    // const color = useAppTheme({ light: textColor?.light, dark: textColor?.dark }, 'text');

    const color = useAppTheme();

    console.log(color);

    return (
        <Text style={style} className={className} {...props}>
            {children}
        </Text>
    )
}