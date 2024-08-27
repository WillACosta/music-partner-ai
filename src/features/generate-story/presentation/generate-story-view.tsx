import { SendHorizontal } from 'lucide-react'

export default function ChatView() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-2 bg-surface border border-stroke rounded-lg overflow-y-auto w-[400px] h-[660px]'>
        {/* todo */}
      </div>

      <div className='flex'>
        <div className='flex items-center gap-2 w-full bg-surface border border-stroke rounded-lg px-3 py-2'>
          <input
            type='text'
            className='w-full bg-surface border-none outline-none'
          />

          <span>
            <SendHorizontal height='16' width='16' />
          </span>
        </div>
      </div>
    </div>
  )
}
