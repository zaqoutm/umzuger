import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Navigation() {
  const width_height = 18;

  return (
    <div className={styles.nav}>
      {/*  */}
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src='/next.svg' alt='Logo' width={width_height} height={width_height} loading='eager' />
          </Link>
        </div>
        <div className={styles.socialLinks}>
          <Link href={"https://instagram.com/companyname"} target='_blank'>
            <Image src='/insta-icon.svg' alt='instagram' width={width_height} height={width_height} loading='eager' />
          </Link>
          <Link href={"https://facebook.com/companyname"} target='_blank'>
            <Image src='/fb-icon.svg' alt='facebook' width={width_height} height={width_height} loading='eager' />
          </Link>
          <Link href={"https://x.com/companyname"} target='_blank'>
            <Image src='/x-icon.svg' alt='x.com' width={width_height} height={width_height} loading='eager' />
          </Link>
        </div>
      </div>
    </div>
  );
}
