import { User } from "../_models/user"

export class Comment{
	id: number;
	content: string;
	user: User;
	created_at: Date;
}