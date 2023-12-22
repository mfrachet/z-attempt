export interface CommentSurfaceProps {
  children: React.ReactNode;
}
export const CommentSurface = ({ children }: CommentSurfaceProps) => {
  return <div className="relative h-full w-full">{children}</div>;
};
