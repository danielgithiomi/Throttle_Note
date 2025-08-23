import {ReactNode} from "react";
import {Colors} from "@constants";
import {TextProps} from "react-native";

export type TNTextVariants = "default" | "title" | "subtitle" | "body" | "caption" | "link";
interface TextColor {
    light: keyof typeof Colors.light;
    dark: keyof typeof Colors.dark;
}
export interface TNTextProps extends TextProps {
    className?: string;
    children: ReactNode;
    textColor?: TextColor;
    variant: TNTextVariants;
}
