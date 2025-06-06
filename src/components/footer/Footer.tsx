import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
  const width_height = 24;
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src='/next.svg' alt='' width={width_height} height={width_height} loading='eager' />
          </Link>
        </div>
      </div>
    </div>
  );
}
