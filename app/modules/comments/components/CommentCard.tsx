import { Card } from "~/ui/Card";
import { IoIosSend } from "react-icons/io/index.js";
import { RiEmojiStickerLine } from "react-icons/ri/index.js";
import { Textarea } from "~/ui/Textarea";
import { ReplyList } from "./ReplyList";
import { Comment, DraftComment } from "../types";
import { ContentEntry } from "./ContentEntry";
import { IconButton } from "~/ui/IconButton";
import EmojiPicker from "emoji-picker-react";
import { useRef, useState } from "react";

export interface CommentCardProps {
  comment: Comment | DraftComment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const stylePosition = {
    left: `${comment.positionX}%`,
    top: `${comment.positionY}%`,
  };

  const toggle = () => setIsPickerVisible((s) => !s);

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
            ref={textareaRef}
            name="content"
            label="Add content"
            placeholder={"e.g: How does this scale?"}
            actions={
              <div className="flex flex-row gap-2 justify-between">
                <IconButton
                  icon={<RiEmojiStickerLine />}
                  label={"Send comment"}
                  onClick={toggle}
                />

                {isPickerVisible && (
                  <div className="absolute z-10 bg-white">
                    <EmojiPicker
                      onEmojiClick={(emoji) => {
                        if (textareaRef.current) {
                          textareaRef.current.value += emoji.emoji;
                          toggle();
                        }
                      }}
                    />
                  </div>
                )}

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
