import { forwardRef, memo } from 'react';
import type { PropsWithChildren, KeyboardEvent, MouseEvent } from 'react';
import classnames from 'classnames';
import styles from './Pressable.module.scss';

type PressableProps = PropsWithChildren<{
  className?: string;
  onClick?: (e: MouseEvent) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
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
