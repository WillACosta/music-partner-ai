import { Sparkles } from 'lucide-react'

type Props = {
  label: string
  onClick?: () => void
}

export function SuggestionButton({ label, onClick }: Props) {
  return (
    <button className='flex gap-2 text-xl items-center font-light p-3 bg-surface-variant text-white rounded-md hover:bg-surface-variant/50 duration-100 ease-in w-full'>
      <Sparkles />
      <span>{label}</span>
    </button>
  )
}
