import { memo } from 'react';

import Button from '../../ui/Button';
import styles from './ModalButtons.module.scss';

type ModalConfirmProps = {
  isLoading?: boolean;
  disabled?: boolean;
};

type ModalButtonsProp = {
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  withCancel?: boolean;
  confirmProps?: ModalConfirmProps;
};

const ModalButtons = ({
  confirmText = 'Save',
  cancelText = 'Cancel',
  onConfirm = () => {},
  onCancel = () => {},
  confirmProps = {},
  withCancel = true,
}: ModalButtonsProp) => (
  <div className={styles.buttons}>
    <Button className="mr-20" onClick={onConfirm} {...confirmProps}>
      {confirmText}
    </Button>

    {withCancel && (
      <Button onClick={onCancel} variant="danger" data-testid="cancel-button">
        {cancelText}
      </Button>
    )}
  </div>
);

export default memo(ModalButtons);
