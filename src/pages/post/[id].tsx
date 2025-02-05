import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-2xl">Beitrag #{id}</h1>
      <p>Das ist ein dynamischer Beitrag mit der ID: {id}</p>
    </div>
  );
}