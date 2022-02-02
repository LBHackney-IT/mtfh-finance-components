import { memo } from 'react';

import Typography from '../Typography';
import LeftBorderContainer from '../../layout/LeftBorderContainer';

import styles from './Checkbox.module.scss';

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
  name: string;
  description?: string;
  withBorder?: boolean;
  title?: string;
};

const Checkbox = ({
  checked,
  onChange,
  name,
  title,
  label,
  withBorder,
  description,
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

Checkbox.defaultProps = {
  withBorder: false,
  title: null,
  description: null,
};

export default memo(Checkbox);
