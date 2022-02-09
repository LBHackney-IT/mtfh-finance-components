import { memo } from 'react';
import type { PropsWithChildren } from 'react';
import { useLockBodyScroll } from 'react-use';
import Modal from 'react-modal';

import classnames from 'classnames';

import styles from './OverlayModal.module.scss';

type OverlayModalProps = PropsWithChildren<{
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}>;

const OverlayModal = ({
  isOpen,
  onClose = () => {},
  children,
  className = '',
}: OverlayModalProps) => {
  useLockBodyScroll(isOpen);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlayModal}
      className={classnames(styles.modal, className)}
    >
      {children}
    </Modal>
  );
};

export default memo(OverlayModal);
