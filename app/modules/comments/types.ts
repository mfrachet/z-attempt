import { User } from "../users/types";

export interface Reply {
  uuid: string;
  content: string;
  date: Date;
}

export interface Comment {
  uuid: string;
  author: User;
  content: string;
  date: Date;
  replies: Array<Reply>;
  positionX: number;
  positionY: number;
}
