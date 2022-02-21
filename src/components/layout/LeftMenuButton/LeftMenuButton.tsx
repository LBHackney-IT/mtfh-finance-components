import { memo, useCallback } from 'react';
import type { ReactNode } from 'react';

import classnames from 'classnames';
import { useRouter } from 'next/router';

import Pressable from '../../ui/Pressable';
import Typography from '../../ui/Typography';

import styles from './LeftMenuButton.module.scss';

type LeftMenuButtonProps = {
  buttonProps: {
    onClick?: () => void;
    route?: string;
    className?: string;
    text: string;
  };
  icon?: ReactNode;
  additionalComponent?: ReactNode;
};

const LeftMenuButton = ({
  icon,
  buttonProps,
  additionalComponent,
}: LeftMenuButtonProps) => {
  const { onClick, route, className = '', text } = buttonProps;

  const router = useRouter();

  const onButtonClick = useCallback(() => {
    onClick?.();
    if (route) router.push(route);
  }, [onClick, route, router]);

  return (
    <Pressable onClick={onButtonClick} className={styles.itemMenu}>
      {icon}

      <Typography size="s" className={classnames(styles.link, className)}>
        {text}
      </Typography>

      {additionalComponent}
    </Pressable>
  );
};

export default memo(LeftMenuButton);
