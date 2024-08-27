import {
  Card,
  LoadingSpinner,
  SuggestionButton,
  TextField,
} from '@/ui/components'

import { AudioWaveform, SendHorizontal } from 'lucide-react'

export default function DashboardView() {
  return (
    <div className='flex flex-col justify-between min-h-[90vh]'>
      <div className='flex flex-col gap-10'>
        <Card variant='large'>
          <div className='flex flex-col justify-center mb-8'>
            <AudioWaveform />
            <strong className='text-xl font-bold'>Music Partner</strong>
            <p className='text-muted text-lg leading-relaxed mt-2'>
              Explore your music library with the power of gen-AI, ask anything
              you want.
            </p>
          </div>

          <div className='flex flex-col gap-4' role='list'>
            <SuggestionButton label='List all songs ordered by artist name.' />
            <SuggestionButton label='What are my favorite songs? Return they in a bullet list.' />
          </div>
        </Card>

        <div className='flex flex-col gap-4 overflow-y-auto max-h-[600px]'>
          <Card>List all my songs ordered by artist name.</Card>

          <Card>What are my favorite songs? Return they in a bullet list.</Card>

          <Card>
            <LoadingSpinner />
          </Card>

          <Card systemResponse>
            <p className='mb-4'>
              Here is you music library ordered by artist name:
            </p>

            <ul className='list-disc list-inside'>
              <li>Colors - Crossfade</li>
              <li>Sweet Child of mine - Guns and Roses</li>
              <li>Broken - Seether</li>
              <li>Burning Bright - Shinedown</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className='flex items-center w-full border border-stroke rounded-lg bg-surface'>
        <TextField />

        <button className='p-3 flex items-center justify-center text-muted hover:text-muted/55 duration-100 ease-in'>
          <SendHorizontal />
        </button>
      </div>
    </div>
  )
}
