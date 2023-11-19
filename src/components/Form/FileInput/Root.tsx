'use client'

import { createContext, useContext, useId, useState } from 'react'

export type RootProps = React.ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], mutiple: boolean) => void
}

const FileInputContext = createContext<FileInputContextType>(
  {} as FileInputContextType,
)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
      return
    }
    setFiles(files)
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
