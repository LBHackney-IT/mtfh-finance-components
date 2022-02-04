import { memo } from 'react';

import classnames from 'classnames';

import Home from '../../../assets/home.svg';
import Garage from '../../../assets/garage.svg';

import styles from './AssetIcon.module.scss';

const icons = {
  home: Home,
  garage: Garage,
};

type AssetIconPropsType = 'garage' | 'home';

type AssetIconProps = {
  className?: string;
  isBig?: boolean;
  type: AssetIconPropsType;
};

const AssetIcon = ({ type, className = '', isBig = false }: AssetIconProps) => {
  const Icon = icons[type];
  return (
    <Icon
      className={classnames(styles.icon, { [styles.big]: isBig }, className)}
      data-testid="asset-icon"
    />
  );
};

export default memo(AssetIcon);
