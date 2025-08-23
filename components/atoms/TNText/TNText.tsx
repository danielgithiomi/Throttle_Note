import {FC} from "react";
import {Text} from "react-native";
import {TNTextProps} from "@tn/atoms";
import {DialogBox} from '@tn/molecules'

export const TNText: FC<TNTextProps> = ({children, ...props}) => {
    return (
        <Text>
            {children}
            <DialogBox/>
        </Text>
    )
}
