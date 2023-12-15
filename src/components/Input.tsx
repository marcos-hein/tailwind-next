import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-blue-500 dark:focus-within:ring-blue-500/20',
        props.className,
      )}
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
