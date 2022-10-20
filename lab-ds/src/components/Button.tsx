import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { ReactNode } from "react"

export interface ButtonProps {
    children: ReactNode
    asChild: boolean
}

export function Button({children, asChild}: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={clsx(
            'py-4 w-full px-3 rounded bg-cyan-400 hover:bg-cyan-200 font-semibold text-black text-sm transition-colors focus:ring-2 ring-white'
        )
            
        }>
            {children}
        </Comp>
    )
}