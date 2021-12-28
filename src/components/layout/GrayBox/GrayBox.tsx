import React, { memo, PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './GrayBox.module.scss';

export type GrayBoxProps = PropsWithChildren<{ className: string }>;

const GrayBox = ({ children, className = '' }: GrayBoxProps) => (
  <div className={classnames(styles.box, className)}>{children}</div>
);

export default memo(GrayBox);
