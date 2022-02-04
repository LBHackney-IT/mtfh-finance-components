import { memo } from 'react';
import type { PropsWithChildren } from 'react';

import classnames from 'classnames';

import Check from '../../../assets/check.svg';
import HelpOutlined from '../../../assets/help-outlined.svg';
import ErrorTriangle from '../../../assets/error-triangle.svg';

import Typography from '../Typography';
import styles from './Alert.module.scss';

const icons = {
  success: <Check />,
  info: <HelpOutlined />,
  error: <ErrorTriangle />,
};

type AlertSeverity = 'success' | 'info' | 'error';

type AlertProps = PropsWithChildren<{
  className?: string;
  severity: AlertSeverity;
}>;

const Alert = ({ children, severity, className = '' }: AlertProps) => (
  <div className={classnames(styles.container, styles[severity], className)}>
    {icons[severity]}

    <Typography variant="h3" weight={600} className={styles.text}>
      {children}
    </Typography>
  </div>
);

export default memo(Alert);
