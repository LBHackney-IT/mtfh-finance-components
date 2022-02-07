import { memo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useToggle } from 'react-use';

import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import MoreIcon from '../../../assets/more.svg';
import CrossIcon from '../../../assets/cross.svg';

import Pressable from '../Pressable';
import Typography from '../Typography';
import HorizontalDivider from '../HorizontalDivider';

import styles from './ContextMenu.module.scss';

type ContextMenuOption = {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
};

type ContextMenuProps = {
  options: Array<ContextMenuOption>;
  trigger?: ReactNode;
  testId?: string | null;
};

//  <MoreIcon />
const ContextMenu = ({ options, trigger, testId = null }: ContextMenuProps) => {
  const [isOpen, toggle] = useToggle(false);

  const onOpen = useCallback(() => toggle(true), [toggle]);
  const onClose = useCallback(() => toggle(false), [toggle]);

  const onOptionClick = useCallback(
    (onClick) => {
      onClick();
      toggle();
    },
    [toggle]
  );

  const tooltipTitle = (
    <div className={styles.tooltipWrapper} data-testid="context-menu-content">
      <div className={styles.header}>
        <Typography size="s">More...</Typography>
        <CrossIcon onClick={toggle} data-testid="context-menu-cross" />
      </div>

      <HorizontalDivider />

      {options.map((option) => (
        <div key={option.label} className={styles.option}>
          {option.icon}

          <Pressable
            onClick={() => onOptionClick(option.onClick)}
            data-testid="context-menu-option"
          >
            <Typography size="s">{option.label}</Typography>
          </Pressable>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.wrapper} data-testid={testId}>
      <ClickAwayListener onClickAway={onClose}>
        <div>
          <Tooltip
            open={isOpen}
            onClose={onClose}
            title={tooltipTitle}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement="bottom-end"
            classes={{ tooltip: styles.tooltip }}
            PopperProps={{ disablePortal: true }}
          >
            <Pressable onClick={onOpen}>{trigger || <MoreIcon />}</Pressable>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default memo(ContextMenu);
