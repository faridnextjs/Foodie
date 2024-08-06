import Link from 'next/link';

export default function Meals() {
  return (
    <>
      <h1>Welcome to the Meals Section!</h1>
      <p>
        <Link href={'/meals/share'}>Share Section</Link>
      </p>
      <p>
        <Link href={'/meals/community'}>Community Section</Link>
      </p>
    </>
  );
}
