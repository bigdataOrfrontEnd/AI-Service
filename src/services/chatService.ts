import { getOllamaChatModel } from '../llm/ollama';
import { openai } from '../llm/deepseek';
import { ConversationChain } from "langchain/chains";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { FileChatMemory } from '../utils/FileChatMemory';

/**
 * 
 * @param input 
 * @param sessionId 
 */
export const getChatResponse = async (input: string, sessionId: string) => {

  const model = getOllamaChatModel();// 获取ChatOllama实例
  const memory = new FileChatMemory("./chat_history.json");//拿到本地文件
  const chain = new ConversationChain({
    llm: model,
    // memory: memory,
  });
  const res= await model.invoke([
  { role: "user", content: "你好，我叫小明" },
  { role: "assistant", content: "Hello Bob! How can I assist you today?" },
  { role: "user", content: "What's my name?" },
]);


  // console.log(chain.call);
  

return res
//   const res1 = await chain.call({ input: "你好，我叫小明。", });
//   console.log("AI:", res1.response);

//   const res2 = await chain.call({ input: "你记得我叫什么名字吗？" });
//   console.log("AI:", res2.response);
// //   const res = await model.invoke(input);
//   return res2;
};
