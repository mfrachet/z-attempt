import { comments as fixturesComments } from "~/modules/comments/fixtures/comments";
import { marvin } from "~/modules/users/fixtures/users";
import { Comment } from "~/modules/comments/types";

export const addCommentFormAction = (formData: FormData) => {
  const content = formData.get("comment")?.toString() || "";
  const date = new Date().toISOString();

  const x = formData.get("x")?.toString() || "";
  const y = formData.get("y")?.toString() || "";

  if (!x || !y) {
    throw new Error("The author, x and y fields are mandatory.");
  }

  // We'd need to get the current user :)
  const user = marvin;
  const comment: Comment = {
    uuid: ``,
    author: user,
    content,
    date,
    replies: [],
    positionX: Number(x),
    positionY: Number(y),
  };

  // Cheating, but we benefit from Remix loader to recompute the data when an action has finished
  fixturesComments.push(comment);
};
