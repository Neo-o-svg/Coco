import LogoIcon from "../../../assets/icons/logo.svg";

import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <a className={styles.logo} href="/">
      <img
        src={LogoIcon}
        alt="Coca logo"
        width="140"
        height="66"
        loading="eager"
        fetchPriority="high"
      />
    </a>
  );
}
