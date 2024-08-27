import { StoryRepository } from '../../domain/data'
import { Story } from '../../domain/model'

export class CStoryRepository implements StoryRepository {
  async generateStory(prompt: string): Promise<Story> {
    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        body: JSON.stringify({ promptMessage: prompt }),
      })

      return (await response.json()) as Story
    } catch (error) {
      console.error('Error generating story:', error)
      throw error
    }
  }
}
