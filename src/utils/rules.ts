/**
 * 按接口定义对应的字段规则
 */
import type { FieldRules } from './validate';

export const chatRules: FieldRules = {
  message: { required: true, type: 'string' },
  sessionId: { required: true, type: 'string' },
  
};

// 以后添加更多接口规则…
