import {FC} from "react";
import {Colors} from "@/constants";
import {cn} from "@/packages/libs";
import {useAppTheme} from "@tn/hooks/useAppTheme";
import {Text, TouchableOpacity} from "react-native";
import {ButtonPadding, ButtonRounded, ButtonVariant, ContentPosition, TNButtonProps} from "@tn/atoms/TNButton";

export const TNButton: FC<TNButtonProps> = ({
                                                id,
                                                icon,
                                                label,
                                                onPress,
                                                disabled,
                                                buttonRef,
                                                className,
                                                labelStyle,
                                                rounded = "small",
                                                padding = "medium",
                                                clickOpacity = 0.75,
                                                variant = "default",
                                                contentPosition = "center",
                                                ...props
                                            }) => {
    const theme = useAppTheme();

    console.log("Theme", theme);

    const buttonColor = Colors[theme].text;
    const buttonTextColor = Colors[theme].background;

    const VARIANT_MAP: Record<ButtonVariant, string> = {
        ghost: `bg-transparent`,
        default: `bg-[${buttonColor}]`,
        outline: `bg-transparent border border-[1.5px] border-[${buttonColor}]`,
    };

    const ROUNDED_MAP: Record<ButtonRounded, string> = {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
    };

    const PADDING_MAP: Record<ButtonPadding, string> = {
        none: "p-0",
        small: "p-2",
        medium: "p-3",
        large: "p-4",
    };

    const POSITION_MAP: Record<ContentPosition, string> = {
        center: "justify-center",
        left: "justify-start",
        right: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
    };

    const buttonClasses = cn(
        "flex flex-row items-center",
        {
            "flex-col": icon?.position === "top",
            "flex-col-reverse": icon?.position === "bottom",
            "flex-row-reverse": icon?.position === "right",
        },
        VARIANT_MAP[variant],
        ROUNDED_MAP[rounded],
        PADDING_MAP[padding],
        POSITION_MAP[contentPosition],
        className
    );

    console.log("Button classes", buttonClasses);

    function handleOnPress() {
        if (disabled) return;
        onPress?.();
    }

    return (
        <TouchableOpacity
            id={id}
            ref={buttonRef}
            disabled={disabled}
            onPress={handleOnPress}
            className={buttonClasses}
            activeOpacity={clickOpacity}
            {...props}
        >
            {icon && icon.icon}
            <Text
                // style={{
                //     color:
                //         variant === "default" ? buttonTextColor : buttonColor,
                // }}
                className={labelStyle}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};
