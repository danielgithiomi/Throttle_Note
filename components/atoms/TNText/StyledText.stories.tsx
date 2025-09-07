import React from "react";
import {StyledText} from "./StyledText";
import {StyledTextProps} from "./StyledText.types";
import {Meta, StoryFn} from "@storybook/react-native";
import {View} from "react-native";

const StyledTextMeta: Meta<typeof StyledText> = {
    title: "Atoms/StyledText",
    component: StyledText,
    argTypes: {
        children: {
            control: "text",
            description: "The text content inside the component",
            defaultValue: "Hello Storybook 👋",
        },
    },
};

export default StyledTextMeta;

const Template: StoryFn<typeof StyledText> = (args: StyledTextProps) => (
    <View className="flex-1 h-full bg-red-600 items-center justify-center">
        <StyledText {...args} />
    </View>
);

export const Default = Template.bind({});
Default.args = {
    children: "Default StyledText",
};

export const CustomText = Template.bind({});
CustomText.args = {
    children: "This is custom text by daniel",
};
