import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';
import styles from './styles.module.css';

export default function Footer() {
  const company_name = process.env.COMPANY_NAME;
  const width_height = 18;
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link href={'/'}>
          <Image priority src='/logo.svg' alt='logo' width={width_height} height={width_height} loading='eager' />
        </Link>
        <Link href={'https://github.com/zaqoutm'} className={styles.dev} target='_blank'>
          <IoLogoGithub size={21} />
          <p>developer</p>
        </Link>
      </div>
      <div className={styles.separator} />
      <div className={styles.links}>
        <p>.{company_name}.©</p>
        <Link href={'/datenschutz'}>Datenschutz</Link>
        {/* <Link href={"#"}>Cookie-Einstellungen</Link> */}
      </div>
    </div>
  );
}
