import { Loader } from 'lucide-react'

export function LoadingSpinner() {
  return (
    <div className='text-muted flex gap-4 items-center'>
      <Loader className='animate-spin-slow ' />
      <span className='animate-pulse'>Generating...</span>
    </div>
  )
}
