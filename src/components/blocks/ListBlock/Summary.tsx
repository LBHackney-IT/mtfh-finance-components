import { memo } from 'react';
import type { ReactNode } from 'react';

import classnames from 'classnames';

import Typography from '../../ui/Typography';

import styles from './ListBlock.module.scss';

type SummaryProps = {
  value: string | number | ReactNode;
  label?: string | null;
  className?: string;
};

const Summary = ({ value, label, className }: SummaryProps) => (
  <div className={classnames(styles.summaryWrapper, className)}>
    <Typography size="s">{value}</Typography>
    <Typography size="s" className="mt-0">
      {label}
    </Typography>
  </div>
);

export default memo(Summary);
