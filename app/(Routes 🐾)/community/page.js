import Link from 'next/link';
export default function Community() {
  return (
    <>
      <h1>⚠️ Welcome to the Community Section! ⚠️</h1>
      <p>
        <Link href={'/community/postCommunity-1'}>Community Section 1</Link>
      </p>
      <p>
        <Link href={'/community/postCommunity-2'}>Community Section 2</Link>
      </p>
      <p>
        <Link href={'/community/postCommunity-3'}>Community Section 3</Link>
      </p>
    </>
  );
}
