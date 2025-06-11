import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
  const width_height = 18;
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link href={"/"}>
          <Image src='/next.svg' alt='logo' width={width_height} height={width_height} loading='eager' />
        </Link>
        <Link href={"https://github.com/zaqoutm"} className={styles.dev} target='_blank'>
          <Image src='/github-icon.svg' alt='developer' width={width_height} height={width_height} loading='eager' />
          <p>Entwikler</p>
        </Link>
      </div>
      <div className={styles.separator} />
      <div className={styles.links}>
        <Link href={"#"}>Datenschutz</Link>
        <Link href={"#"}>Cookie-Einstellungen</Link>
        <p>© Company_name</p>
      </div>
    </div>
  );
}
