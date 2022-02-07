import { memo } from 'react';
import classnames from 'classnames';

import Button from '../Button';

import styles from './ButtonsGroup.module.scss';

type ButtonsGroupProps = {
  isFirstSelected: boolean;
  toggle: (value: boolean) => void;
  leftText: string;
  rightText: string;
};

const ButtonsGroup = ({
  isFirstSelected,
  toggle,
  leftText,
  rightText,
}: ButtonsGroupProps) => (
  <div className={styles.buttonGroup}>
    <Button
      className={classnames(
        styles.firstButtonGroup,
        isFirstSelected ? styles.green : styles.white
      )}
      onClick={() => toggle(true)}
    >
      {leftText}
    </Button>

    <Button
      className={classnames(
        styles.lastButtonGroup,
        isFirstSelected ? styles.white : styles.green
      )}
      onClick={() => toggle(false)}
    >
      {rightText}
    </Button>
  </div>
);

export default memo(ButtonsGroup);
