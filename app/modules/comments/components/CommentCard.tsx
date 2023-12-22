import { Card } from "~/ui/Card";
import { IoIosSend } from "react-icons/io/index.js";
import { Textarea } from "~/ui/Textarea";
import { ReplyList } from "./ReplyList";
import { Comment, DraftComment } from "../types";
import { ContentEntry } from "./ContentEntry";
import { IconButton } from "~/ui/IconButton";

export interface CommentCardProps {
  comment: Comment | DraftComment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
  const stylePosition = {
    left: `${comment.positionX}%`,
    top: `${comment.positionY}%`,
  };

  return (
    <div
      className="w-72 absolute"
      style={stylePosition}
      tabIndex={0}
      data-type="card"
    >
      <Card>
        <div className="flex flex-col gap-4">
          <ContentEntry
            author={comment.author}
            content={comment.content}
            date={comment.date}
          />

          <ReplyList replies={comment.replies} />

          <Textarea
            name="comment"
            label="Add a comment"
            placeholder={"e.g: How does this scale?"}
            actions={
              <div className="flex flex-row gap-2 justify-between">
                <IconButton
                  type="submit"
                  icon={<IoIosSend />}
                  label={"Send comment"}
                />
              </div>
            }
          />
        </div>
      </Card>
    </div>
  );
};
