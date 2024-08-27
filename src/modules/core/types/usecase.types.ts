export type AsyncUseCase<Params, Result> = {
  execute(params: Params): Promise<Result>
}

export type SyncUseCase<Params, Result> = {
  execute(params: Params): Result
}

// example
export type GetDictsUseCase = AsyncUseCase<string, DictionarySuggestions | null>

interface DictionarySuggestions {
  suggestions: string[]
}

// useCase function
export const getDictionarySuggestionsUseCase = (
  restRepository: any
): GetDictsUseCase => ({
  execute: (word) => restRepository.getDictionarySuggestions(word),
})
