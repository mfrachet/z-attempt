import { Comment } from "../types";

export const deleteComment = (comment: Comment): Promise<boolean> => {
  return Promise.resolve(true);
};
