import { BufferMemory,BaseMemory  } from "langchain/memory";
// import { BaseMessage, Message } from "./Message";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import * as fs from "fs/promises";

export class FileChatMemory extends BaseMemory  {
  private filePath: string;

  constructor(filePath: string) {
    super();
    this.filePath = filePath;
  }

  // 定义 Memory 提供的上下文键名
  get memoryKeys(): string[] {
    return ["file_history"];
  }

  // 保存对话上下文到文件
  async saveContext(inputValues: any, outputValues: any): Promise<void> {
    const history = `${inputValues.input}: ${outputValues.response}\n`;
    await fs.appendFile(this.filePath, history);
  }

  // 从文件加载对话历史
  async loadMemoryVariables(_inputs: any): Promise<any> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return { file_history: data };
    } catch (err) {
      return { file_history: "" }; // 文件不存在时返回空
    }
  }
  // 可选：清理文件中的历史记录
  async clear(): Promise<void> {
    await fs.writeFile(this.filePath, "");
  }
  // private filePath: string;
  // constructor(filePath: string) {
  //   super();
  //   this.filePath = filePath;
  // }
   // 从文件加载历史消息
  //  async loadMemoryVariables(): Promise<Record<string, any>> {
  //   try {
  //     console.log(this.chatHistory);
      
  //     const data = await fs.readFile(this.filePath, "utf-8");
  //     const messagesData: BaseMessage[] = JSON.parse(data);
  //     // 清空当前历史
  //     await this.chatHistory.clear();
  //     // 逐条添加消息
  //     for (const msg of messagesData) {
  //       // Method to add user and AI messages to the chat history in sequence.
  //       await this.chatHistory.addMessage();
  //     }
  //   } catch (error) {
  //   }
  //   // 返回历史消息
  //   const messages = await this.chatHistory.getMessages();
  //   return { history: messages };
  // }
  // 保存新消息到文件
  // async saveContext(input: Record<string, any>, output: Record<string, any>): Promise<void> {
  //   await super.saveContext(input, output);

  //   const messages = await this.chatHistory.getMessages();

  //   const messagesToSave = messages.map((msg) => ({
  //     role: (msg as any).role,
  //     content: (msg as any).content,
  //   }));

  //   await fs.writeFile(this.filePath, JSON.stringify(messagesToSave, null, 2), "utf-8");
  // }
}
