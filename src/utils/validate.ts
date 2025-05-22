// src/utils/validate.ts
/**
 * 定义通用校验工具
 */
export type FieldRules = {
    [key: string]: {
        required?: boolean;
        type?: 'string' | 'number' | 'boolean';
    };
};

export const validateFields = (body: any,rules: FieldRules): Record<string, string> => {
    const errors: Record<string, string> = {};

    for (const key in rules) {
        const rule = rules[key];
        const value = body[key];

        if (rule.required && (value === undefined || value === null || value === '')) {
            errors[key] = '字段是必填项';
        } else if (rule.type && typeof value !== rule.type) {
            errors[key] = `字段必须是 ${rule.type} 类型`;
        }
    }

    return errors;
};
