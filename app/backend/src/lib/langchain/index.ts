import type { AIMessageChunk } from 'langchain'
import { llm } from './config.js'
import { summarizePostPrompt } from './prompts.js'

export async function summarizePost(post: string): Promise<AIMessageChunk> {
  const formattedPrompt = await summarizePostPrompt.format({ post })
  const response = await llm.invoke(formattedPrompt)
  return response
}
