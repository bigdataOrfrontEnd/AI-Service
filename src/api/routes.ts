import express, { Request, Response } from 'express';

const router = express.Router();



router.post('/chat', async (req:any, res: any) => {
  const { input, sessionId } = req.body;

  if (!input || !sessionId) {
    return res.status(400).json({ error: 'Missing input or sessionId' });
  }

  try {
    // const response = await getChatResponse(input, sessionId);
    // res.json({ response: response.response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;