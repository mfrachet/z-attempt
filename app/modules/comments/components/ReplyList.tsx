import { DraftReply, Reply } from "../types";
import { ContentEntry } from "./ContentEntry";

export interface ReplyListProps {
  replies: Array<Reply | DraftReply>;
}

export const ReplyList = ({ replies }: ReplyListProps) => {
  return (
    <ol className="max-h-32 overflow-scroll flex flex-col gap-2">
      {replies.map((reply, index: number) => (
        <li key={`reply-${index}`}>
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
