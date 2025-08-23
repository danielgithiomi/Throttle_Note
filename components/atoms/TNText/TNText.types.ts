import { ReactNode } from "react";
import { Colors } from "@constants";
import { DimensionValue, TextProps, TextStyle } from "react-native";

export type TNTextVariants =
    | "default"
    | "title"
    | "subtitle"
    | "caption"
    | "link";
interface TextColor {
    both: string;
    dark?: keyof typeof Colors.dark;
    light?: keyof typeof Colors.light;
}

interface VariantProps {
    classes: string;
    color: keyof typeof Colors.light | keyof typeof Colors.dark;
}

export interface TNTextProps extends TextProps {
    className?: string;
    children?: ReactNode;
    textColor?: TextColor;
    variant?: TNTextVariants;
}

export const VariantClassMap: Record<TNTextVariants, VariantProps> = {
    default: {
        classes: "text-base font-normal leading-6",
        color: "text",
    },
    title: {
        classes: "text-4xl font-bold leading-8",
        color: "text",
    },
    subtitle: {
        classes: "text-2xl font-semibold leading-6",
        color: "text",
    },
    caption: {
        classes: "text-xl font-bold leading-6 italic",
        color: "tertiary",
    },
    link: {
        classes:"text-base font-semibold leading-6 underline",
        color: "accent",
    },
};
