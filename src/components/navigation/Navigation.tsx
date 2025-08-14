import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './styles.module.css';

export default function Navigation() {
  const company_name = process.env.NEXT_PUBLIC_COMPANY_NAME_SOCIAL;

  return (
    <div className={styles.nav}>
      {/*  */}
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <img src='/logo.svg' alt='Logo' />
          </Link>
        </div>
        <div className={styles.socialLinks}>
          <Link href={`https://instagram.com/${company_name}`} target='_blank'>
            <FaInstagram size={24} />
          </Link>
          <Link href={`https://facebook.com/${company_name}`} target='_blank'>
            <FaFacebookF size={24} />
          </Link>
          <Link href={`https://x.com/${company_name}`} target='_blank'>
            <BsTwitterX size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
