import { useState } from "react";
import { Comment, DraftComment } from "../types";
import { CommentCard } from "./CommentCard";
import { marvin } from "~/modules/users/fixtures/users";

export interface CommentSurfaceProps {
  children: React.ReactNode;
  comments: Array<Comment>;
}
export const CommentSurface = ({ children, comments }: CommentSurfaceProps) => {
  const [draftComments, setDraftComments] = useState<Array<DraftComment>>([]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    const draftComment: DraftComment = {
      author: marvin,
      content: "",
      date: new Date(),
      replies: [],
      positionX: x,
      positionY: y,
    };

    setDraftComments((s) => [...s, draftComment]);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="relative h-full w-full" onClick={handleClick}>
      {children}

      {draftComments.map((draftComment, index: number) => (
        <CommentCard key={`draft-comment-${index}`} comment={draftComment} />
      ))}

      {comments.map((comment) => (
        <CommentCard key={comment.uuid} comment={comment} />
      ))}
    </div>
  );
};
