import Link from "next/link";

type Post = {
  id: string;
  title: string;
};

type Props = {
  post: Post;
};

export const PostLink: React.FC<Props> = ({ post }) => (
  <Link href={`/post/${post.id}`} className="text-blue-500">
    {post.title}
  </Link>
);
