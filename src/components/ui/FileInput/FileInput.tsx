import { memo } from 'react';
import classnames from 'classnames';
import type { UseFormRegister } from 'react-hook-form';

import Typography from '../Typography';

import styles from './FileInput.module.scss';

type FileInputProps = {
  id: string;
  name: string;
  register?: UseFormRegister<{ [key: string]: string }>;
  label?: string;
};

const FileInput = ({ id, name, register, label, ...rest }: FileInputProps) => (
  <label className={classnames('govuk-label lbh-label', styles.label)} htmlFor={id}>
    <Typography variant="h3">{label}</Typography>

    <input
      id={id}
      name={name}
      type="file"
      className={classnames('govuk-file-upload lbh-file-upload', styles.input)}
      {...rest}
      {...(register && register(name))}
      data-testid="file-input"
    />
  </label>
);

export default memo(FileInput);
