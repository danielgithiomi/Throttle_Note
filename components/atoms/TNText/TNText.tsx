import {cn} from "@libs";
import {FC, useMemo} from "react";
import {Text} from "react-native";
import {Colors} from "@constants";
import {useAppTheme} from "@tn/hooks/useAppTheme";
import {TNTextProps, VariantClassMap} from './TNText.types'

export const TNText: FC<TNTextProps> = ({style, variant = "default", textColor, children, className, ...props}) => {

    const theme = useAppTheme();
    const textStyle = useMemo(() => VariantClassMap[variant], [variant]);

    function getTextColor(): string {
        if (textColor) {
            if ("both" in textColor) return textColor.both;
            if (textColor[theme]) return textColor[theme];
        }
        return Colors[theme][textStyle.color];
    }

    return (
        <Text
            className={cn(textStyle.classes, className)}
            style={[
                {
                    color: getTextColor()
                },
                style
            ]}
            {...props}>
            {children}
        </Text>
    )
}