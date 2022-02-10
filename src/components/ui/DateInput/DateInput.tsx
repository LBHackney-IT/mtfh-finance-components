import { memo, useCallback } from 'react';
import type { ChangeEvent } from 'react';

import Input from '../Input';
import Typography from '../Typography';
import ErrorMessage from '../ErrorMessage';
import LeftBorderContainer from '../../layout/LeftBorderContainer';

import styles from './DateInput.module.scss';

type DateValues = {
  day: string;
  month: string;
  year: string;
};

type DateInputProps = {
  label?: string;
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
  withBorder?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  dateValues: DateValues;
};

// Use in conjunction with 'useDateInput' hook
const DateInput = ({
  dateValues,
  label = '',
  onChange,
  errorMessage = '',
  withBorder = false,
  className = '',
  disabled = false,
}: DateInputProps) => {
  const renderInput = useCallback(
    (name) => (
      <Input
        name={name}
        classNameContainer="mt-0"
        classNameInput={name === 'year' ? styles.yearInput : styles.commonInput}
        value={dateValues[name as keyof DateValues] as string}
        onChange={onChange}
        disabled={disabled}
        withError={Boolean(errorMessage)}
      />
    ),
    [dateValues, disabled, errorMessage, onChange]
  );

  return (
    <LeftBorderContainer
      enabled={withBorder}
      className={className}
      hasError={Boolean(errorMessage)}
    >
      {label && (
        <Typography size="m" className="mb-10">
          {label}
        </Typography>
      )}

      <ErrorMessage text={errorMessage} className={styles.error} />

      <div className={styles.inputsWrapper}>
        {renderInput('day')}
        {renderInput('month')}
        {renderInput('year')}
      </div>
    </LeftBorderContainer>
  );
};

export default memo(DateInput);
