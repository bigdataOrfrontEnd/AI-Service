// src/utils/apiResponse.ts
export const errorResponse = (
    res:any,
    code: number = 500,
    message: string = 'Internal Server Error',
    details?: Record<string, string>
  ) => {
    return res.status(code).json({
      code,
      message,
      ...(details && { details }),
      timestamp: new Date().toISOString(),
    });
  };
  