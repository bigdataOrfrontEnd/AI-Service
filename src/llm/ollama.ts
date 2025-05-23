import { ChatOllama } from "@langchain/ollama";

export const getOllamaChatModel = () => {
  return new ChatOllama({
    baseUrl: 'http://localhost:11434',
    model: 'llama3', // 请替换为你本地运行的模型名
  });
};