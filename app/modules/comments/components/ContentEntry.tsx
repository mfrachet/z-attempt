import { User } from "~/modules/users/types";
import { Avatar } from "~/ui/Avatar";
import { Typography } from "~/ui/Typography";

export interface ContentEntryProps {
  author: User;
  content: string;
  date: string;
}

export const ContentEntry = ({ author, content, date }: ContentEntryProps) => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <Avatar src={author.pictureSrc} fullname={author.fullname}></Avatar>
        <Typography className="font-bold text-sm">{author.fullname}</Typography>
      </div>
      <Typography as="p" className="text-sm">
        {content}
      </Typography>
    </div>
  );
};
