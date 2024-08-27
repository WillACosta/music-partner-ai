import { Story } from '../model'

export interface StoryRepository {
  generateStory(prompt: string): Promise<Story>
}
