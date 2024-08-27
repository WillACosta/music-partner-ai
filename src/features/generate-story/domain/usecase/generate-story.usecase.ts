import { StoryRepository } from '../data'
import { Story } from '../model'

export async function generateStoryUseCase(
  prompt: string,
  repository: StoryRepository
): Promise<Story> {
  return repository.generateStory(prompt)
}
