import LeftBorderContainer from '../../layout/LeftBorderContainer';
import ErrorMessage from '../ErrorMessage';

type SelectProps = {
  name: string;
  options: Array<SelectOption>;
  register?: any;
  withBorder?: boolean;
  errorMessage?: string;
  className?: string;
  label?: string;
};

type SelectOption = {
  value: string;
  label: string;
};

const Select = ({
  name,
  label = '',
  options,
  register = () => {},
  withBorder = false,
  errorMessage = '',
  className = '',
  ...rest
}: SelectProps) => (
  <LeftBorderContainer
    enabled={withBorder}
    hasError={Boolean(errorMessage)}
    className={className}
  >
    <div className="govuk-form-group lbh-form-group">
      <label className="govuk-label lbh-label" htmlFor={name}>
        {label}
      </label>

      <ErrorMessage text={errorMessage} />

      <select
        id={name}
        name={name}
        className="govuk-select lbh-select"
        {...rest}
        {...register(name)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </LeftBorderContainer>
);

export default Select;
