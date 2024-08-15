import Link from 'next/link';

export default function Meals() {
  return (
    <>
      <h1>Welcome to the Meals Section!</h1>
      <p>
        <Link href="/meals/post-1">Meal Section Post 1</Link>
      </p>
      <p>
        <Link href="/meals/post-2">Meal Section Post 2</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Section</Link>
      </p>
    </>
  );
}
