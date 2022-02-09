import classnames from 'classnames';

import type { UseFormRegister } from 'react-hook-form';
import Typography from '../Typography';
import ErrorMessage from '../ErrorMessage';
import LeftBorderContainer from '../../layout/LeftBorderContainer';

import styles from './Input.module.scss';

type ValidationSchema = {};

type OnChangeTarget = {
  name: string;
  value: string;
};

type InputProps = {
  name?: string;
  label?: string | null;
  value?: string;
  onChange?: ({ target }: { target: OnChangeTarget }) => void;
  classNameContainer?: string;
  classNameInput?: string;
  errorMessage?: string;
  register?: UseFormRegister<{ [key: string]: string }>;
  validation?: ValidationSchema;
  withBorder?: boolean;
  withError?: boolean;
  description?: string | null;
  disabled?: boolean;
};

const Input = ({
  label = null,
  name = '',
  classNameContainer = '',
  classNameInput = '',
  register,
  validation = {},
  errorMessage = '',
  withBorder = false,
  withError = false, // use only to color input in red
  description = null,
  disabled = false,
  ...rest
}: InputProps) => (
  <LeftBorderContainer
    enabled={withBorder}
    hasError={Boolean(errorMessage)}
    className={classNameContainer}
  >
    {label && (
      <label htmlFor={name} className="govuk-label lbh-label">
        {label}
      </label>
    )}

    <ErrorMessage text={errorMessage} className={styles.error} />

    <input
      className={classnames('govuk-input lbh-input', classNameInput, {
        'govuk-input--error': Boolean(errorMessage) || withError,
        [styles.disabled]: disabled,
      })}
      id={name}
      type="text"
      disabled={disabled}
      data-testid="input"
      {...rest}
      {...(register && register(name, validation))}
    />

    {description && (
      <Typography size="s" className={styles.description}>
        {description}
      </Typography>
    )}
  </LeftBorderContainer>
);

export default Input;
