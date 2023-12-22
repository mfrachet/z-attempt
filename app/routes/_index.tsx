import type { MetaFunction } from "@remix-run/node";
import { CommentCard } from "~/modules/comments/components/CommentCard";
import { CommentSurface } from "~/modules/comments/components/CommentSurface";
import { comments } from "~/modules/comments/fixtures/comments";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <CommentSurface>
      <main className="bg-slate-900 px-12 h-full">
        {comments.map((comment) => (
          <CommentCard key={comment.uuid} comment={comment} />
        ))}
      </main>
    </CommentSurface>
  );
}
