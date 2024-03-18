import { GobotOptions } from '../../Gobot'
import { AppFactory } from '../index'
import { OllamaGobot } from './OllamaGobot'
import { OllamaReleaseProvider } from './OllamaReleaseProvider'

export const mkOllamaBot: AppFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  return new OllamaGobot(
    `ollama/ollama`,
    (repo, cacheRoot) => new OllamaReleaseProvider(repo, cacheRoot),
    optionsIn,
  )
}
