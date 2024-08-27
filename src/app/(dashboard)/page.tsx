'use client'

import { CStoryRepository } from '@/features/generate-story/data'
import GenerateStoryView from '@/features/generate-story/presentation/generate-story-view'

const repository = new CStoryRepository()

export default function GenerateStory() {
  return <GenerateStoryView />
}
