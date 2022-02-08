import { memo } from 'react';
import LoaderSpinner from 'react-loader-spinner';

import classnames from 'classnames';

import styles from './Loader.module.scss';

type LoaderProps = {
    size?: number;
    className?: string;
    isLoading: boolean
};

const Loader = ({ size = 40, isLoading, className = '' }: LoaderProps) => (
  <LoaderSpinner
    wrapperClass={classnames(className, styles.center)}
    visible={isLoading}
    type="Oval"
    color="#00664f"
    width={size}
    height={size}
  />
);

export default memo(Loader);
