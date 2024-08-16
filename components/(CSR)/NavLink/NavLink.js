'use client';
import Link from 'next/link';
import classes from './NavLink.module.css';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname(),
    linkClasses = [
      classes.link, // Always include `link` class
      path.startsWith(href) && classes.active, // Conditionally include `active` class
    ]
      .filter(Boolean) // Filter out falsy values and join the array
      .join(' ');
  return (
    <>
      <Link href={href} className={linkClasses}>
        {children}
      </Link>
    </>
  );
}
