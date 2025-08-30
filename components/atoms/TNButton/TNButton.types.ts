import {ReactNode, Ref} from "react";
import {TouchableOpacityProps, View} from "react-native";

export type ButtonVariant = 'default' | 'outline' | 'ghost';
export type ButtonPadding = 'none' | 'small' | 'medium' | 'large';
export type ButtonRounded = 'none' | 'small' | 'medium' | 'large' | 'full';
export type ContentPosition = 'center' | 'left' | 'right' | 'between' | 'around' | 'evenly';

interface TNButtonIconProps {
    icon: ReactNode;
    position?: 'left' | 'right' | 'top' | 'bottom';
}

export interface TNButtonProps extends TouchableOpacityProps {
    id: string;
    label: string;
    shadow?: boolean;
    disabled?: boolean;
    labelStyle?: string;
    isLoading?: boolean;
    clickOpacity?: number;
    rounded?: ButtonRounded;
    padding?: ButtonPadding;
    variant?: ButtonVariant;
    icon?: TNButtonIconProps;
    contentPosition?: ContentPosition;

    // Others
    buttonRef?: Ref<View>;

    // Callback Functions
    onPress?: () => void;
}
