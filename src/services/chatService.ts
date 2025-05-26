import { getOllamaChatModel } from '../llm/ollama';
import { openai } from '../llm/deepseek';
import { ConversationChain } from "langchain/chains";
// import { getPromptTemplate } from '../config/promptTemplates';
// import { getMemory } from '../memory/mongoMemory';
/**
 * 
 * @param input 
 * @param sessionId 
 */
export const getChatResponse = async (input: string, sessionId: string) => {

  const model = getOllamaChatModel();// 获取ChatOllama实例
  const res = await model.invoke(input);
  return res;
};
