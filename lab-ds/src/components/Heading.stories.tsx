import {Meta} from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'Heading H2',
        size: 'md'
    },
    argsTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

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
        asChild: true,
        children: (
            <h2></h2>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}