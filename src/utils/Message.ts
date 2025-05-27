// 定义消息角色类型
export type Role = "user" | "assistant" | "system" | "tool";

// 基础消息接口
export interface BaseMessage {
  role: Role;
  content: string;
  timestamp?: Date;
}

// 具体消息类实现
export class Message implements BaseMessage {
  role: Role;
  content: string;
  timestamp: Date;

  constructor(role: Role, content: string) {
    this.role = role;
    this.content = content;
    this.timestamp = new Date();
  }
}
