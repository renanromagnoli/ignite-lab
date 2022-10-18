import {Meta} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum'
    }
} as Meta<TextProps>

export const Default = {}

export const Small = {
    args: {
        size: 'sm'
    }
}

export const Large = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent = {
    args: {
        asChild: 'true',
        children: (
            <p>Custom Component</p>
        )
    }
}