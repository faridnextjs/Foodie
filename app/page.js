import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 style={{ color: '#fff', textAlign: ' center' }}>
        Time to get started!
      </h1>
    </main>
  );
}
