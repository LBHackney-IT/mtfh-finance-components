import { memo } from 'react';

import Typography from '../Typography';
import LeftBorderContainer from '../../layout/LeftBorderContainer';

import styles from './Checkbox.module.scss';

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
  name: string;
  description?: string | null;
  withBorder?: boolean;
  title?: string | null;
};

const Checkbox = ({
  checked,
  onChange,
  name,
  title = null,
  label,
  withBorder = false,
  description = null,
}: CheckboxProps) => {
  const id = `${name}-checkbox`;

  return (
    <LeftBorderContainer enabled={withBorder} className={styles.wrapper}>
      {title && <Typography size="m">{title}</Typography>}

      <div className="govuk-checkboxes__item">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="govuk-checkboxes__input"
          data-testid="checkbox"
        />

        <label className="govuk-label govuk-checkboxes__label" htmlFor={id}>
          {label}
        </label>
      </div>

      {description && (
        <Typography size="s" className={styles.description}>
          {description}
        </Typography>
      )}
    </LeftBorderContainer>
  );
};

export default memo(Checkbox);
