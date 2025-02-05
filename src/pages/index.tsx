import { PostLink } from "@/components/PostLink";

type Post = {
  id: string;
  title: string;
};

const posts: Post[] = [
  { id: "1", title: "Erster Beitrag" },
  { id: "2", title: "Zweiter Beitrag" },
];

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Mein Next.js Blog 🚀</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostLink post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
