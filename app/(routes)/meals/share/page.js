import Link from 'next/link';

export default function Share() {
  return (
    <>
      <h1>⚠️ Welcome to the Share Section! ⚠️</h1>
      <p>
        <Link href={'/meals/share/postShare-1'}>Share Section 1</Link>
      </p>
      <p>
        <Link href={'/meals/share/postShare-2'}>Share Section 2</Link>
      </p>
      <p>
        <Link href={'/meals/share/postShare-3'}>Share Section 3</Link>
      </p>
    </>
  );
}
