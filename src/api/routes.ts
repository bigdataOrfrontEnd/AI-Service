import express, { Request, Response } from 'express';
import { validateFields } from '../utils/validate';
import { errorResponse } from '../utils/apiResponse';
import { chatRules } from '../utils/rules';
const router = express.Router();
interface ChatRequestBody {
  message: string;
  sessionId: string;
}
/**
 * @swagger
 * /chat:
 *   post:
 *     summary: 与 AI 模型进行对话
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - input
 *               - sessionId
 *             properties:
 *               input:
 *                 type: string
 *               sessionId:
 *                 type: string
 *     responses:
 *       200:
 *         description: 返回 AI 回复内容
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 */
router.post('/chat', async (req:Request<{},{},ChatRequestBody>, res: any) => {
  const errors = validateFields(req.body, chatRules);
  if (Object.keys(errors).length > 0) {
    return errorResponse(res, 400, '参数校验失败', errors);
  }
  const { message, sessionId } = req.body;
  console.log(req.body);
  try {
    // const response = await getChatResponse(input, sessionId);
    res.json({ message: `你传入的  是：${message}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/test',async (req: Request, res: Response) => {
  console.log(req);
  res.send('测试接口 OK');
  
})

export default router;