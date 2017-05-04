import { User } from '../_models/user';
import { Update } from './update';
import { Comment } from './comment';

export class Project {
  id?: number;
  name: string;
  description: string;
  funding_goal: number;
  current_funding?: number;
  image?: string;
  backers?: number;
  user?: User;
  updates?: Update[];
  comments?: Comment[];
  votes?: number;
  created_at?: Date;
  updated_at?: Date;
}