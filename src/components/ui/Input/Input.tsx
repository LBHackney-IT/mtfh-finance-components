import classnames from 'classnames';

import Typography from '../Typography';
import ErrorMessage from '../ErrorMessage';
import LeftBorderContainer from '../../layout/LeftBorderContainer';

import styles from './Input.module.scss';

type ValidationSchema = {};

type InputProps = {
  name?: string;
  label?: string | null;
  classNameContainer?: string | null;
  classNameInput?: string | null;
  errorMessage?: string;
  register?: () => void;
  validation?: ValidationSchema;
  withBorder?: boolean;
  withError?: boolean;
  description?: string | null;
  disabled?: boolean;
};

const Input = ({
  label = null,
  name = '',
  classNameContainer = null,
  classNameInput = null,
  register = () => {}, // for usage with react-hook-form
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
      name={name}
      type="text"
      disabled={disabled}
      data-testid="input"
      {...rest}
      {...register(name, validation)}
    />

    {description && (
      <Typography size="s" className={styles.description}>
        {description}
      </Typography>
    )}
  </LeftBorderContainer>
);

export default Input;
