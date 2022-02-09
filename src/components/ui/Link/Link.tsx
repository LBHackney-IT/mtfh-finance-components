import { memo } from 'react';
import type { PropsWithChildren } from 'react';
import NextLink from 'next/link';

import Pressable from '../Pressable';

import styles from './Link.module.scss';

type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>;

const Link = ({ href, className = '', children }: LinkProps) => (
  <NextLink href={href}>
    <span className={styles.link}>
      <Pressable className={className}>{children}</Pressable>
    </span>
  </NextLink>
);

export default memo(Link);
