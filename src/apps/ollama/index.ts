import { AppInfo } from '../'
import { mkOllamaBot } from './factory'

export const ollama: AppInfo = {
  name: `Ollama`,
  description: `Get up and running with Llama 2, Mistral, Gemma, and other large language models.`,
  homepage: `https://ollama.com/`,
  isAlpha: true,
  factory: mkOllamaBot,
}
