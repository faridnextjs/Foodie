import styles from './page.module.css';
import Link from 'next/link';

// const h1Inline = { display: 'grid', placeContent: 'center', color: '#FFCCBC' };

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Time to get started!</h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        {' '}
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
