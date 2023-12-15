export type TextareaProps = React.ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100  dark:placeholder-zinc-400 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
      {...props}
    />
  )
}
