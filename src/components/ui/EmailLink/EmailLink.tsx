import { memo } from 'react';

import styles from './EmailLink.module.scss';

type EmailLinkProps = {
  href: string;
};

const EmailLink = ({ href }: EmailLinkProps) => (
  <a className={styles.emailLink} href={`mailto:${href}`}>
    {href}
  </a>
);

export default memo(EmailLink);
