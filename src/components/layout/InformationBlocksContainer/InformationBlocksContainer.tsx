import { memo, PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './InformationBlocksContainer.module.scss';

export type InformationBlocksContainerProps = PropsWithChildren<{ className?: string }>;

const InformationBlocksContainer = ({
  children,
  className = '',
}: InformationBlocksContainerProps) => (
  <div className={classnames(styles.container, className)}>{children}</div>
);

export default memo(InformationBlocksContainer);
