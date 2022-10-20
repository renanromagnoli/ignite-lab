import { Meta } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your email address'/>
        ],
        
    },
    argsType: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>

export const Default = {}

