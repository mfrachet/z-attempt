import { comments as fixturesComments } from "~/modules/comments/fixtures/comments";
import { marvin } from "~/modules/users/fixtures/users";
import { Reply } from "~/modules/comments/types";

export const addReplyToCommentFormAction = (formData: FormData) => {
  const commentId = formData.get("commentid")?.toString() || "";
  const content = formData.get("content")?.toString() || "";
  const date = new Date().toISOString();

  if (!commentId) {
    throw new Error("commentId fields are mandatory.");
  }

  // We'd need to get the current user :)
  const user = marvin;
  const reply: Reply = {
    uuid: ``,
    author: user,
    content,
    date,
  };

  const currentComment = fixturesComments.find((c) => c.uuid === commentId);
  if (currentComment) {
    currentComment.replies.push(reply);
  }
};
