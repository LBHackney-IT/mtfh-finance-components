import { memo, PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './PageContainer.module.scss';

export type PageContainerProps = PropsWithChildren<{ className?: string }>;

const PageContainer = ({ className = '', children }: PageContainerProps) => (
  <div className={classnames(styles.container, className)}>{children}</div>
);

export default memo(PageContainer);
