import { Text } from "react-native";
import {FC} from "react";
import {StyledTextProps} from "@/components/atoms/StyledText/StyledText.types";

export const StyledText: FC<StyledTextProps> = ({ children, ...props }) => {
    return (
        <Text>
            {children}
        </Text>
    )
}
