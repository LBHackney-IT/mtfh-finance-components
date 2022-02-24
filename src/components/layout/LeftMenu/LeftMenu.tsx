import { memo } from 'react';
import type { ReactNode } from 'react';

import { useRouter } from 'next/router';

import Logo from '../../../assets/logo.svg';

import HorizontalDivider from '../../ui/HorizontalDivider';
import LeftMenuButton from '../LeftMenuButton';

import styles from './LeftMenu.module.scss';

type LinkButtonProps = {
  text: string;
  route: string;
  className?: string;
  onClick?: () => void;
};

type PageLink = {
  icon: ReactNode;
  buttonProps: LinkButtonProps;
  additionalComponent?: ReactNode;
};

type Separator = {
  id: number;
};

type LeftMenuProps = {
  regularLinks: Array<Separator | PageLink>;
  pageSpecificLinks?: ReactNode;
};

function isPageLink(x: PageLink | Separator): x is PageLink {
  return (x as PageLink).icon !== undefined;
}

const LeftMenu = ({ regularLinks, pageSpecificLinks }: LeftMenuProps) => {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <Logo className={styles.hackneyLogo} onClick={() => router.push('/')} />

      {pageSpecificLinks && (
        <div className={styles.actionButtons}>{pageSpecificLinks}</div>
      )}

      <div className={styles.regularLinksWrapper}>
        {regularLinks.map((link) => {
          if (!isPageLink(link)) return <HorizontalDivider key={link.id} />;

          const { icon, buttonProps, additionalComponent } = link;

          return (
            <LeftMenuButton
              key={buttonProps.text}
              icon={icon}
              buttonProps={{
                ...buttonProps,
                className: `${styles.link} ${
                  router.pathname === buttonProps.route ? styles.bold : ''
                } ${buttonProps.className ?? ''}`,
              }}
              additionalComponent={additionalComponent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(LeftMenu);
