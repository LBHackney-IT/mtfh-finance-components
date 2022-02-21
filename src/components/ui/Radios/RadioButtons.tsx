import { memo } from 'react';

import classnames from 'classnames';

import RadioButton from './RadioButton';

import styles from './Radios.module.scss';

type RadioButtonOption = {
  value: string;
  label: string;
};

type RadioButtonsProps = {
  className?: string;
  isHorizontal?: boolean;
  checkedItemId: string;
  onChange: (id: string) => void;
  options: Array<RadioButtonOption>;
};

const RadioButtons = ({
  options,
  onChange,
  checkedItemId,
  isHorizontal = true,
  className = '',
}: RadioButtonsProps) => (
  <div
    className={classnames(
      'govuk-form-group lbh-form-group',
      styles.radioButtons,
      className,
      { [styles.horizontal]: isHorizontal }
    )}
    data-testid="radio-buttons"
  >
    <fieldset className="govuk-fieldset mr-20">
      <div className="govuk-radios lbh-radios">
        {options.map((option) => (
          <RadioButton
            id={option.value}
            key={option.value}
            onChange={onChange}
            label={option.label}
            checked={checkedItemId === option.value}
          />
        ))}
      </div>
    </fieldset>
  </div>
);

export default memo(RadioButtons);
