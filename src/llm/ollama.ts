import { ChatOllama } from "@langchain/ollama";

export const getOllamaChatModel = () => {
  return new ChatOllama({
    baseUrl: 'http://localhost:11434',
    model: 'deepseek-r1:1.5b', // 请替换为你本地运行的模型名
  });
};