import {Slot} from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import {clsx} from 'clsx'

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean
}

export function Heading({size='md', children, asChild}: HeadingProps){
    const Comp = asChild ? Slot : 'h2'
    return(
        <Slot className={
            clsx(
                'text-gray-100 font-bold font-sans',
                {
                    'text-lg': size === 'sm',
                    'text-xg': size === 'md',
                    'text-2xg': size === 'lg'
                }
            )
        }>{children}</Slot>
    )
}