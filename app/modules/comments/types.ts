import { User } from "../users/types";

export interface Reply {
  uuid: string;
  author: User;
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

// DTOs for adding a comment
export interface DraftReply extends Omit<Reply, "uuid"> {}
export interface DraftComment extends Omit<Comment, "uuid" | "replies"> {
  replies: Array<DraftReply>;
}
