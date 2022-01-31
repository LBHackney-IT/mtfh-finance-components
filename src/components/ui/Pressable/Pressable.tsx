import { forwardRef, memo } from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Pressable.module.scss';

type PressableProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

const Pressable = forwardRef<HTMLButtonElement, PressableProps>(
  ({ onClick = () => {}, children = '', className = '', ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={classnames(styles.button, className)}
      {...rest}
    >
      {children}
    </button>
  )
);

Pressable.displayName = 'Pressable';

export default memo(Pressable);
