import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import MainHeaderBackground from './mainHeaderBackground';
import NavLink from '@/components/(CSR)/NavLink/NavLink';

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// <img src={logoImage.src} alt="A plate with food on it" /> image placed under the src attribute inside of the object
// <Image src={logoImage} for Image component
