export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-blue-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm font-medium leading-5 text-blue-700 dark:text-zinc-100">
          Used space
        </span>
        <p className="text-sm leading-5 text-blue-500 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-blue-100 dark:bg-zinc-600">
        <div className="h-2 w-4/5 rounded-full bg-blue-600 dark:bg-blue-400" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
        >
          Dismiss
        </button>

        <button
          type="button"
          className="text-sm font-medium text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
