import { Reply } from "../types";
import { ContentEntry } from "./ContentEntry";

export interface ReplyListProps {
  replies: Array<Reply>;
}

export const ReplyList = ({ replies }: ReplyListProps) => {
  return (
    <ol className="max-h-32 overflow-scroll flex flex-col gap-2">
      {replies.map((reply) => (
        <li key={reply.uuid}>
          <ContentEntry
            author={reply.author}
            content={reply.content}
            date={reply.date}
          />
        </li>
      ))}
    </ol>
  );
};
