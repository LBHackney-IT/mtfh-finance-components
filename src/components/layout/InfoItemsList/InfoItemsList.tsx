import { memo, PropsWithChildren } from 'react';

import classnames from 'classnames';
import GrayBox from '../GrayBox';

import styles from './InfoItemsList.module.scss';

export type InfoItemsListProps = PropsWithChildren<{ className?: string }>;

const InfoItemsList = ({ children, className = '' }: InfoItemsListProps) => (
  <GrayBox className={classnames(styles.container, className)}>{children}</GrayBox>
);

export default memo(InfoItemsList);
