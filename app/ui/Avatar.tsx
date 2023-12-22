export interface AvatarProps {
  src: string;
  fullname: string;
}
export const Avatar = ({ src, fullname }: AvatarProps) => {
  return (
    <img
      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
      src={src}
      alt={fullname}
    />
  );
};
