import { memo } from 'react';

import { useOnPressEnter } from '../../../hooks';

import Input from '../../ui/Input';
import Button from '../../ui/Button';

import styles from './InputSearch.module.scss';

type InputSearchProps = {
  onChange: () => void;
  value: string;
  textButton?: string;
  withOnEnter?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  placeholder?: string;
};

const InputSearch = ({
  onClick = () => {},
  textButton = 'Search',
  isLoading = false,
  withOnEnter = true,
  placeholder = 'Search',
  ...rest
}: InputSearchProps) => {
  const onEnterHandler = withOnEnter && onClick ? onClick : () => {};
  const onPressEnter = useOnPressEnter(onEnterHandler);

  return (
    <div className={styles.inputContainer}>
      <Input
        name="search"
        placeholder={placeholder}
        classNameContainer={styles.input}
        onKeyPress={onPressEnter}
        {...rest}
      />

      <Button className={styles.button} isLoading={isLoading} onClick={onClick}>
        {textButton}
      </Button>
    </div>
  );
};

export default memo(InputSearch);
