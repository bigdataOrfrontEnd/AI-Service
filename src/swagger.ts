import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AIService API',
      version: '1.0.0',
      description: 'API documentation for AIService based on LangChain + Ollama/Deepseek',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./src/api/*.ts'], // 注释写在路由文件里
});
