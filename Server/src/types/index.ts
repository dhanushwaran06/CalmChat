export interface User {
    email: string;
    password: string;
    id: number;
  }
  
  declare global {
    namespace Express {
      interface Request {
        userId?: number;
      }
    }
  }
  