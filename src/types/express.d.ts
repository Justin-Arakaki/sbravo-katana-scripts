import { User } from './userTypes';

export {};

declare global {
  namespace Express {
    export interface Request {
      headers?: {
        'x-access-token'?: string;
      };
      user?: User;
    }
  }
}
