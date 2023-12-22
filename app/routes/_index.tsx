import type { MetaFunction } from "@remix-run/node";
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
    <CommentSurface comments={comments}>
      <main className="bg-slate-900 px-12 h-full">
        <h1>Hello world</h1>
      </main>
    </CommentSurface>
  );
}
