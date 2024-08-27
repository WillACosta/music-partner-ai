'use client'

import TextareaAutosize from 'react-textarea-autosize'

type Props = {}

export function TextField(props: Props) {
  return (
    <TextareaAutosize
      maxLength={256}
      maxRows={10}
      className='w-full py-3 px-12 outline-none bg-transparent resize-none'
      {...props}
    />
  )
}
