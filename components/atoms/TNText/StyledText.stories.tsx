import React from "react";
import {View} from "react-native";
import {Meta, StoryFn} from "@storybook/react-native";
import {TNText, TNTextProps} from '@tn/atoms/TNText';

const StyledTextMeta: Meta<typeof TNText> = {
    title: "Atoms/StyledText",
    component: TNText,
    argTypes: {
        children: {
            control: "text",
            description: "The text content inside the component",
            defaultValue: "Hello Storybook 👋",
        },
    },
};

export default StyledTextMeta;

const Template: StoryFn<typeof TNText> = (args: TNTextProps) => (
    <View className="flex-1 h-full bg-red-600 items-center justify-center">
        <TNText {...args} />
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
