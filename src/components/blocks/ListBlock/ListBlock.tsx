import { memo } from 'react';

import classnames from 'classnames';

import Typography from '../../ui/Typography';
import AssetIcon from '../../ui/AssetIcon';
import GrayBox from '../../layout/GrayBox';
import Summary from './Summary';

import styles from './ListBlock.module.scss';

type ListBlockData = {
  value: string | number;
  label: string;
  className?: string;
};

type ListBlockProps = {
  name?: string;
  description?: string;
  data: Array<ListBlockData>;
  className?: string | null;
  iconType: 'garage' | 'home';
};

const ListBlock = ({
  data = [],
  name = null,
  description = null,
  className = null,
  iconType,
}: ListBlockProps) => (
  <GrayBox className={classnames(styles.container, className)}>
    {['garage', 'home'].includes(iconType) && (
      <AssetIcon type={iconType} className={styles.icon} isBig />
    )}

    <Typography variant="h3">
      {name}
      {typeof description === 'string' && description}
    </Typography>

    {data.length > 0 && (
      <div className={styles.summary}>
        {data.map((item) => (
          <Summary
            key={`${item.value} + ${item.label}`}
            value={item.value ?? '-'}
            label={item.label}
            className={item.className ?? ''}
          />
        ))}
      </div>
    )}
  </GrayBox>
);

export default memo(ListBlock);
