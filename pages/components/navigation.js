import React from "react";
import Link from "next/link";
import styles from "../../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.menu}>
      <ul className="nav-bar">
        <Link href="/">Features</Link>
        <Link href="/">A Mobile LMS</Link>
        <Link href="/">Course Library</Link>
        <Link href="/">Industries</Link>
        <Link href="/">Educate All</Link>
        <Link href="/">Support</Link>
        <Link href="/">Testimonials</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Log In</Link>
        <Link href="/">Sign Up Free</Link>
      </ul>
    </header>
  );
}
