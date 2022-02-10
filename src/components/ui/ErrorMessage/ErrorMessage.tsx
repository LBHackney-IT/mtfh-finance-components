import { memo } from 'react';
import classnames from 'classnames';

type ErrorMessageProps = {
  className?: string;
  text?: string;
};

const ErrorMessage = ({ text = '', className = '' }: ErrorMessageProps) =>
  text ? (
    <span className={classnames('govuk-error-message lbh-error-message', className)}>
      {text}
    </span>
  ) : null;

export default memo(ErrorMessage);
