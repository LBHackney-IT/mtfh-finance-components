import { memo } from 'react';
import type { ReactNode } from 'react';

import Tooltip from '@mui/material/Tooltip';

import Arrow from '../../../assets/arrow.svg';

import Pressable from '../Pressable';
import Typography from '../Typography';

import styles from './Popup.module.scss';

type PopupProps = {
  trigger: ReactNode;
  bottomText: string;
  topText: string;
  goTo: string;
};

const Popup = ({ trigger, topText, bottomText, goTo }: PopupProps) => {
  const tooltip = (
    <a
      target="_blank"
      className={styles.inner}
      rel="noopener noreferrer"
      href={goTo}
      data-testid="tooltip"
    >
      <div className={styles.text}>
        <Typography size="s" weight={700}>
          {topText}
        </Typography>
        <Typography size="s">{bottomText}</Typography>
      </div>

      <Arrow />
    </a>
  );

  return (
    <Tooltip
      arrow
      title={tooltip}
      placement="top"
      open
      classes={{
        tooltip: styles.content,
        arrow: styles.arrow,
      }}
    >
      <Pressable>
        <Typography size="xs">{trigger}</Typography>
      </Pressable>
    </Tooltip>
  );
};

export default memo(Popup);
