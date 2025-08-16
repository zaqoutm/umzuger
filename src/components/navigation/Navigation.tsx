import { COMPANY_NAME_SOCIAL } from '@/config';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import config from '../../../next.config';
import styles from './styles.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      {/*  */}
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <img src={`${config.basePath}/logo.svg`} alt='Logo' />
          </Link>
        </div>
        <div className={styles.socialLinks}>
          <Link href={`https://instagram.com/${COMPANY_NAME_SOCIAL}`} target='_blank'>
            <FaInstagram size={24} />
          </Link>
          <Link href={`https://facebook.com/${COMPANY_NAME_SOCIAL}`} target='_blank'>
            <FaFacebookF size={24} />
          </Link>
          <Link href={`https://x.com/${COMPANY_NAME_SOCIAL}`} target='_blank'>
            <BsTwitterX size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
