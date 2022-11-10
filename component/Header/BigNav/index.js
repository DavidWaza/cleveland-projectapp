import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const BigNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.brandName}>
        <p>cleveland group</p>
      </Link>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? `${styles.navigationMenu} ${styles.expanded}`
            : `${styles.navigationMenu}`
        }
      >
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BigNav;
