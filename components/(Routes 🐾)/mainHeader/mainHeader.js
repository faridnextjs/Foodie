import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import MainHeaderBackground from './mainHeaderBackground';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            width={40}
            height={40}
            src={logoImage}
            alt="A plate with food on it"
            priority
          />{' '}
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodie Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// <img src={logoImage.src} alt="A plate with food on it" /> image placed under the src attribute inside of the object
// <Image src={logoImage} for Image component
