import { log } from 'console';
import express, { Request, Response } from 'express';

const router = express.Router();

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
router.post('/chat', async (req:any, res: any) => {
  const { input, sessionId } = req.body;
  console.log(req.body);
  
  if (!input || !sessionId) {
    return res.status(400).json({ error: 'Missing input or sessionId' });
  }

  try {
    // const response = await getChatResponse(input, sessionId);
    res.json({ response: "hellow" });
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