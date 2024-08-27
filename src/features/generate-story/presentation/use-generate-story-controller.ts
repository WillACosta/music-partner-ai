import { useState } from 'react'
import { StoryRepository } from '../domain/data'

export function useGenerateStoryController(repository: StoryRepository) {
  const [story, setStory] = useState<string>()
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  async function generateStory(prompt: string) {
    try {
      setIsGenerating(true)
      const response = await repository.generateStory(prompt)
      setStory(response.message)
    } catch (error) {
    } finally {
      setIsGenerating(false)
    }
  }

  return {
    story,
    isGenerating,
    generateStory,
  }
}
