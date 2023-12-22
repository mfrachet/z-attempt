import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CommentSurface } from "~/modules/comments/components/CommentSurface";
import { comments as fixturesComments } from "~/modules/comments/fixtures/comments";
import { addCommentFormAction } from "~/modules/comments/form-actions/addCommentFormAction";
import { Comment } from "~/modules/comments/types";
import { marvin } from "~/modules/users/fixtures/users";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface LoaderData {
  comments: Array<Comment>;
}
export const loader = (): LoaderData => {
  return { comments: fixturesComments };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  addCommentFormAction(formData);

  return null;
};

export default function Index() {
  const { comments } = useLoaderData<LoaderData>();

  return (
    <CommentSurface comments={comments}>
      <main className="bg-slate-900 px-12 h-full">
        <h1>Hello world</h1>
      </main>
    </CommentSurface>
  );
}
