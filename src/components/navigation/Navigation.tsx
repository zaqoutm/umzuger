import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./styles.module.css";

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
            <FaInstagram size={24} />
          </Link>
          <Link href={"https://facebook.com/companyname"} target='_blank'>
            <FaFacebookF size={24} />
          </Link>
          <Link href={"https://x.com/companyname"} target='_blank'>
            <BsTwitterX size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
