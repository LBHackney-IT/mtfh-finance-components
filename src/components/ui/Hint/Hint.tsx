import { memo } from 'react';

import classnames from 'classnames';

import ErrorCircle from '../../../assets/error-circle.svg';

import Typography from '../Typography';

import styles from './Hint.module.scss';

const getIcon = (iconType: HintIconType) => {
  const icons = {
    warning: <ErrorCircle data-testid="error-circle" />,
  };
  return icons[iconType];
};

type HintIconType = 'warning';

type HintProps = {
  className?: string;
  text: string;
  iconType: HintIconType;
};

const Hint = ({ iconType, text, className = '' }: HintProps) => {
  const icon = getIcon(iconType);

  return (
    <div className={classnames(styles.hint, className)}>
      {icon}
      <Typography size="m" weight={300}>
        {text}
      </Typography>
    </div>
  );
};

export default memo(Hint);
