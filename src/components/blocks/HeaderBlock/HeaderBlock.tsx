import { memo } from 'react';

import classnames from 'classnames';

import Typography from '../../ui/Typography';

import styles from './HeaderBlock.module.scss';

type HeaderBlockProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

const HeaderBlock = ({
  title = '',
  subtitle = 'Hackney Housing Finance Portal',
  description = '',
  className = '',
}: HeaderBlockProps) => (
  <section className={classnames(styles.wrapper, className)} data-testid="header-block">
    {subtitle && (
      <Typography variant="caption" size="xl" className={styles.subtitle}>
        {subtitle}
      </Typography>
    )}

    {title && <Typography variant="h1">{title}</Typography>}

    {description && (
      <Typography className={styles.description} weight={300} size="m">
        {description}
      </Typography>
    )}
  </section>
);

export default memo(HeaderBlock);
