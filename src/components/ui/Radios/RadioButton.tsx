import { memo } from 'react';
import type { ReactNode } from 'react';

type RadioButtonProps = {
  id: string;
  checked: boolean;
  onChange: (id: string) => void;
  label: ReactNode;
};

const RadioButton = ({ id, checked, onChange, label }: RadioButtonProps) => (
  <div className="govuk-radios__item">
    <input
      id={id}
      name={id}
      value={id}
      type="radio"
      checked={checked}
      onChange={() => onChange(id)}
      className="govuk-radios__input"
      data-testid={`${id}-button`}
    />

    <label className="govuk-label govuk-radios__label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default memo(RadioButton);
