import { memo } from 'react';

import Checkbox from '@mui/material/Checkbox';

import styles from './CheckboxSmall.module.scss';

type CheckboxSmallProps = {
    [key: string]: unknown
}

const CheckboxSmall = (props: CheckboxSmallProps) => (
  <Checkbox
    classes={{ root: styles.root, checked: styles.checked }}
    disableRipple
    {...props}
  />
);

export default memo(CheckboxSmall);
